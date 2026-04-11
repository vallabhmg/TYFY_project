from django.shortcuts import render

# Create your views here.
def landing_page(request):
    return render(request, 'landing.html')

def about_page(request):
    return render(request, 'about.html')

def students_page(request):
    return render(request, 'students.html')

def events_page(request):
    return render(request, 'events.html')

def careers_page(request):
    return render(request, 'careers.html')

def contact_page(request):
    return render(request, 'contact.html')

def lms_login(request):
    return render(request, 'lms_login.html')

def lms_dashboard(request):
    return render(request, 'lms_dashboard.html')

def registration_page(request):
    return render(request, 'registration.html')

# def digital_id(request):
#     return render(request, 'digital_id.html')