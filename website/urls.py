from django.urls import path
from .templates import website
from . import views

urlpatterns = [
    path('', views.home, name='index'),
    path('home', views.home, name='home'),
    path('service', views.service, name='service'),
    path('reference', views.reference, name='reference'),
    path('contact', views.contact, name='contact'),
    path('send-request', views.send_service_request, name='send-request')
]