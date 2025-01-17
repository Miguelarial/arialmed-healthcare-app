output "id" {
  description = "The ID of the virtual network"
  value       = azurerm_virtual_network.main.id
}

output "name" {
  description = "The name of the virtual network"
  value       = azurerm_virtual_network.main.name
}

output "subnet_id" {
  description = "The ID of the subnet"
  value       = azurerm_subnet.main.id
}
