from django.shortcuts import render
from website.constants import service_form_dictionary
from collections import OrderedDict
from django.core.mail import send_mail
from django.conf import settings


def index(request):
    return render(request, 'website/index.html')


def home(request):
    return render(request, 'website/home_temp.html')


def service(request):
    return render(request, 'website/service.html')


def reference(request):
    return render(request, 'website/reference.html')


def contact(request):
    return render(request, 'website/contact.html')


def send_service_request(request):
    message = ""
    company_name = request.POST.get("company_name")
    for key, val in service_form_dictionary.items():
        field_value = request.POST.get(key)
        message = message + val + ":\t"+str(field_value) + "\n"
    subject = "Upit za usluge i servis- " + str(company_name)

    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['sarvan.nebojsa@gmail.com', ]
    #status = send_mail(subject, message, email_from, recipient_list)

    return render(request,"nesto")