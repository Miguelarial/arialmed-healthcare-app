terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "3.85.0"
    }
    random = {
      source  = "hashicorp/random"
      version = "3.6.0"
    }
  }
  required_version = ">= 1.7.0"
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
}

provider "random" {}