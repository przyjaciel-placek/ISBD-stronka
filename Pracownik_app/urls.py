from django.conf.urls import url
from Pracownik_app import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [

    url(r'newest/',views.getSixNewestBooksApi),

    url(r'search/(.*)$',views.getSearch),

    url(r'promoBook/',views.getPromoBook),

    url(r'bestsellers/',views.getBestsellers),

    url(r'^ksiazka$',views.ksiazkaApi),
    url(r'^ksiazka/([0-9]+)$',views.ksiazkaApi),

    url(r'^klient$',views.klientApi),
    url(r'^klient/([0-9]+)$',views.klientApi),

    url(r'^pracownik$',views.pracownikApi),
    url(r'^pracownik/([0-9]+)$',views.pracownikApi),

    url(r'^zamowienie$',views.zamowienieApi),
    url(r'^zamowienie/([0-9]+)$',views.zamowienieApi),

    url(r'^recenzja$',views.recenzjaApi),
    url(r'^recenzja/([0-9]+)$',views.recenzjaApi),

    url(r'^obserwacja$',views.obserwacjaApi),
    url(r'^obserwacja/([0-9]+)$',views.obserwacjaApi),

    url(r'^ksiazka/savefile',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
