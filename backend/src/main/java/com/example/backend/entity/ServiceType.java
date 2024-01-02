package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
public class ServiceType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceTypeId;

    private String serviceName;

    private String description;

    @OneToMany(mappedBy = "serviceType")
    private List<Service> services;

    public ServiceType() {
    }

    public ServiceType(String serviceName, String description, List<Service> services) {
        this.serviceName = serviceName;
        this.description = description;
        this.services = services;
    }

    public Long getServiceTypeId() {
        return serviceTypeId;
    }

    public void setServiceTypeId(Long serviceTypeId) {
        this.serviceTypeId = serviceTypeId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ServiceType that)) return false;
        return Objects.equals(getServiceTypeId(), that.getServiceTypeId()) && Objects.equals(getServiceName(), that.getServiceName()) && Objects.equals(getDescription(), that.getDescription()) && Objects.equals(getServices(), that.getServices());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getServiceTypeId(), getServiceName(), getDescription(), getServices());
    }

    @Override
    public String toString() {
        return "ServiceType{" +
                "serviceTypeId=" + serviceTypeId +
                ", serviceName='" + serviceName + '\'' +
                ", description='" + description + '\'' +
                ", services=" + services +
                '}';
    }
}
