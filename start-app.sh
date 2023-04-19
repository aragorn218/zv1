#!/bin/bash

# Apply k8s manifests in the namespace
kubectl apply -f namespace.yaml
kubectl apply -f deployment.yaml -n my-app
kubectl apply -f statefulset.yaml -n my-app
kubectl apply -f service.yaml -n my-app

