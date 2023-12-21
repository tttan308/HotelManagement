package com.example.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
public class Service {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceId;

    private String serviceName;

    @ManyToOne
    @JoinColumn(name = "service_type_id")
    private ServiceType serviceType;

    private boolean availability;

    private double price;

    private String schedule;

    private String location;

    private String serviceImageId;

    private String termsAndConditions;

    public Service() {
    }

    public Service(String serviceName, ServiceType serviceType, boolean availability, double price, String schedule, String location, String serviceImageId, String termsAndConditions) {
        this.serviceName = serviceName;
        this.serviceType = serviceType;
        this.availability = availability;
        this.price = price;
        this.schedule = schedule;
        this.location = location;
        this.serviceImageId = serviceImageId;
        this.termsAndConditions = termsAndConditions;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public String getServiceName() {
        return serviceName;
    }

    public void setServiceName(String serviceName) {
        this.serviceName = serviceName;
    }

    public ServiceType getServiceType() {
        return serviceType;
    }

    public void setServiceType(ServiceType serviceType) {
        this.serviceType = serviceType;
    }

    public boolean isAvailability() {
        return availability;
    }

    public void setAvailability(boolean availability) {
        this.availability = availability;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getServiceImageId() {
        return serviceImageId;
    }

    public void setServiceImageId(String serviceImageId) {
        this.serviceImageId = serviceImageId;
    }

    public String getTermsAndConditions() {
        return termsAndConditions;
    }

    public void setTermsAndConditions(String termsAndConditions) {
        this.termsAndConditions = termsAndConditions;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Service service)) return false;
        return isAvailability() == service.isAvailability() && Double.compare(getPrice(), service.getPrice()) == 0 && Objects.equals(getServiceId(), service.getServiceId()) && Objects.equals(getServiceName(), service.getServiceName()) && Objects.equals(getServiceType(), service.getServiceType()) && Objects.equals(getSchedule(), service.getSchedule()) && Objects.equals(getLocation(), service.getLocation()) && Objects.equals(getServiceImageId(), service.getServiceImageId()) && Objects.equals(getTermsAndConditions(), service.getTermsAndConditions());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getServiceId(), getServiceName(), getServiceType(), isAvailability(), getPrice(), getSchedule(), getLocation(), getServiceImageId(), getTermsAndConditions());
    }

    @Override
    public String toString() {
        return "Service{" +
                "serviceId=" + serviceId +
                ", serviceName='" + serviceName + '\'' +
                ", serviceType=" + serviceType +
                ", availability=" + availability +
                ", price=" + price +
                ", schedule='" + schedule + '\'' +
                ", location='" + location + '\'' +
                ", serviceImageId='" + serviceImageId + '\'' +
                ", termsAndConditions='" + termsAndConditions + '\'' +
                '}';
    }
}
