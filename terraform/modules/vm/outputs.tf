output "id" {
  description = "The ID of the virtual machine"
  value       = azurerm_linux_virtual_machine.main.id
}

output "public_ip" {
  description = "The public IP address of the virtual machine"
  value       = azurerm_public_ip.main.ip_address
}

output "private_ip" {
  description = "The private IP address of the virtual machine"
  value       = azurerm_network_interface.main.private_ip_address
}

output "admin_username" {
  description = "The admin username of the virtual machine"
  value       = azurerm_linux_virtual_machine.main.admin_username
}
