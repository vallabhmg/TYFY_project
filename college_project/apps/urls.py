from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing_page, name='landing'),
    path('about/',views.about_page,name='about'), 
    path('students/', views.students_page,name='students'),
    path('events/',views.events_page,name='events'),
    path('careers/', views.careers_page,name='careers'),
    path('contact/',views.contact_page,name='contact'),
    path('lms/login/',views.lms_login,name='lms_login'),
    path('lms/dashboard/',views.lms_dashboard,name='lms_dashboard'),
    path('registration/',views.registration_page,name='registration'),
    # path('digital_id/',views.digital_id,name="digital_id"),
]