module "resource_group" {
  source  = "./modules/resource-group"
  name    = "arialmed-infra-rg"
  location = var.region
}

module "nsg" {
  source              = "./modules/nsg"
  name                = "arialmed-nsg"
  location            = var.region
  resource_group_name = module.resource_group.name
}

module "vnet" {
  source              = "./modules/vnet"
  name                = "arialmed-vnet"
  location            = var.region
  resource_group_name = module.resource_group.name
  address_space       = var.vnet_address_space
  subnet_name         = var.subnet_name
  subnet_cidr         = var.subnet_cidr
}

module "vm" {
  source              = "./modules/vm"
  name                = "arialmed-vm"
  location            = var.region
  resource_group_name = module.resource_group.name
  subnet_id           = module.vnet.subnet_id
  nsg_id              = module.nsg.id
  admin_username      = var.admin_username
  ssh_public_key      = file(var.ssh_public_key_path)
}
