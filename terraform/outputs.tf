output "resource_group_name" {
  value = module.resource_group.name
}

output "vm_public_ip" {
  value = module.vm.public_ip
}

output "vm_private_ip" {
  value = module.vm.private_ip
}
