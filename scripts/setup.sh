#!/bin/bash

# AEP Prototype Setup Script
# This script helps you set up and deploy the AEP prototype

set -e

echo "🚀 AEP - Agentic Experience Platform Setup"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo -e "${RED}Error: Node.js version 18+ required${NC}"
    echo "Current version: $(node -v)"
    exit 1
fi

echo -e "${GREEN}✓ Node.js version check passed$(node -v)${NC}"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencies installed successfully${NC}"
else
    echo -e "${RED}✗ Failed to install dependencies${NC}"
    exit 1
fi

echo ""
echo "=========================================="
echo "Setup complete! 🎉"
echo ""
echo "Available commands:"
echo -e "${YELLOW}npm run dev${NC}      - Start development server"
echo -e "${YELLOW}npm run build${NC}    - Build for production"
echo -e "${YELLOW}npm run preview${NC}  - Preview production build"
echo ""
echo "To start developing:"
echo "  npm run dev"
echo ""
echo "The app will open at http://localhost:3000"
echo "=========================================="
