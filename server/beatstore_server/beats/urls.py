from django.urls import path
from .views import ArtistListView, BeatListView

urlpatterns = [
    path('beats/', BeatListView.as_view()),
    path('artists/', ArtistListView.as_view()),
]
