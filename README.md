# Microservices API Gateway Pattern and Saga Pattern Implementation
[VIDEO LINK](https://drive.google.com/file/d/1lfHriZiuc1myAxEXIv-L9Z6E3-xUxzUB/view?usp=sharing)
## Introduction

This repository provides an example implementation of two important patterns in microservices architecture: the API Gateway pattern and the Saga pattern. The API Gateway pattern serves as a central entry point for client interaction, while the Saga pattern manages distributed transactions and ensures data consistency across multiple services.

## Table of Contents

- [API Gateway Pattern](#api-gateway-pattern)
  - [Overview](#overview)
  - [How it Works](#how-it-works)
  - [Benefits](#benefits)
- [Saga Pattern](#saga-pattern)
  - [Overview](#overview-1)
  - [How it Works](#how-it-works-1)
  - [Implementation](#implementation)
- [Getting Started](#getting-started)
- [Conclusion](#conclusion)

## API Gateway Pattern

### Overview

The API Gateway pattern acts as a centralized entry point for client interactions in a microservices architecture. It orchestrates traffic by intelligently routing requests to the appropriate microservices, handling security, protocol translation, load balancing, caching, and more.

### How it Works

1. **Centralized Entry Point**: Clients communicate exclusively with the API Gateway.
2. **Intelligent Routing**: The Gateway routes requests to the appropriate microservices based on predefined rules.
3. **Traffic Orchestrator**: It efficiently directs incoming requests, ensuring seamless communication between clients and microservices.
4. **Security Measures**: Enforces authentication, authorization, and other security measures.
5. **Response Aggregation**: Aggregates responses from multiple microservices into a unified response.
6. **Protocol Translation**: Handles protocol translation for standardized communication.
7. **Load Balancing**: Distributes incoming requests evenly among multiple instances of a microservice.
8. **Caching**: Implements caching mechanisms to optimize performance.

### Benefits

- Simplified Client Interaction
- Intelligent Routing
- Traffic Orchestrator
- Response Aggregation
- Protocol Translation
- Security Centralization
- Load Balancing
- Caching Mechanisms

## Saga Pattern

### Overview

The Saga Pattern manages transactions and ensures data consistency across multiple services in a distributed system, particularly in a microservices architecture. It breaks down transactions into smaller, local transactions and employs compensation transactions to maintain consistency.

### How it Works

1. **Local Transactions**: Each step in a business process is executed as a local transaction in its respective service.
2. **Compensation Transactions**: If one local transaction fails, compensating transactions are triggered to undo previous steps and maintain consistency.
3. **Communication**: Services communicate with each other through messages or events, ensuring the system's stability.

### Implementation

This repository provides an example implementation of the Saga pattern using Node.js. It demonstrates the Choreography-Based Saga approach with a hotel room reservation scenario involving three microservices: Booking Service, Payment Service, and Notification Service.

## Getting Started

To run the example implementation, follow these steps:

1. Clone this repository.
2. Navigate to the project directory.
5. Test the functionality using a REST client or tool like Postman.

## Conclusion

The API Gateway pattern and Saga pattern are essential components in building scalable, resilient microservices architectures. By centralizing communication and managing transactions effectively, these patterns contribute to the overall efficiency and reliability of the system.
