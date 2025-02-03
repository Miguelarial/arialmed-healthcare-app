# Arialmed - Healthcare Management System

![Arialmed Logo](public/logo.png)

[![Live Demo](https://img.shields.io/badge/Live_Demo-Arialmed-2ea44f)](https://arialmed.xyz)

A modern, secure healthcare management platform built with Next.js and Azure cloud infrastructure. The system provides comprehensive appointment management capabilities for both medical staff and patients.

## Features

### Patient Portal
- Secure appointment scheduling and management
- Document upload with validation
- Real-time notifications

### Medical Staff Dashboard
- Comprehensive appointment management
- Patient record access
- Real-time analytics and reporting
- Role-based access control
- Audit logging

## Tech Stack

### Frontend
- Next.js 14 with TypeScript
- Tailwind CSS for styling
- React components and hooks
- Responsive design principles

### Backend & Database
- Appwrite Backend-as-a-Service
- Node.js runtime
- Zod for data validation
- Secure data storage

### Infrastructure
- Azure Cloud Services
- Terraform for Infrastructure as Code
- Docker containerization
- Azure DevOps for CI/CD

### Security
- Network Security Groups (NSG)
- Azure Key Vault integration
- SonarQube code analysis
- Sentry error tracking

## Getting Started

### Prerequisites
- Node.js 18 or higher
- Docker Desktop
- Azure CLI
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/arialmed.git
cd arialmed
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`
```bash
# Appwrite Configuration
PROJECT_ID=your_appwrite_project_id
API_KEY=your_appwrite_api_key
DATABASE_ID=your_database_id
PATIENT_COLLECTION_ID=appwrite_patients
DOCTOR_COLLECTION_ID=appwrite_doctors
APPOINTMENT_COLLECTION_ID=appwrite_appointments

# Client-side Exposed Variables
NEXT_PUBLIC_BUCKET_ID=appwrite_bucket_id
NEXT_PUBLIC_ENDPOINT=https://your-appwrite-endpoint/v1
NEXT_PUBLIC_SERVICEID=emailjs_service_id
NEXT_PUBLIC_TEMPLATEID=emailjs_template_id
NEXT_PUBLIC_APIKEY=emailjs_public_key

# Security
NEXT_PUBLIC_ADMIN_PASSKEY=your_secure_passkey
```

5. Run the development server:
```bash
npm run dev

```

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t arialmed .
```

2. Run the container:
```bash
docker-compose up -d
```

## Infrastructure Setup

### Azure Resources
1. Initialize Terraform:
```bash
cd terraform
terraform init
```

2. Review and apply infrastructure changes:
```bash
terraform plan
terraform apply
```

