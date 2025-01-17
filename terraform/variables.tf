variable "region" {
  description = "Azure region for resources"
  default     = "UK South"
}

variable "vnet_address_space" {
  description = "Address space for VNet"
  default     = "10.0.0.0/16"
}

variable "subnet_name" {
  description = "Name of the subnet"
  default     = "default"
}

variable "subnet_cidr" {
  description = "CIDR block for subnet"
  default     = "10.0.0.0/24"
}

variable "admin_username" {
  description = "Admin username for VM"
  default     = "azureuser"
}

variable "ssh_public_key_path" {
  description = "Path to SSH public key"
  default     = "~/.ssh/id_rsa.pub"
}
