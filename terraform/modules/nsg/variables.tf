variable "name" {
  description = "Name of the network security group"
  type        = string
}

variable "location" {
  description = "Azure region for the network security group"
  type        = string
}

variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
}