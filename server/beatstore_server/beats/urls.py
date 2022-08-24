from django.urls import path
from .views import ArtistListView, BeatListView, BeatView

urlpatterns = [
    path('beats/', BeatListView.as_view()),
    path('beat/<int:id>', BeatView.as_view()),
    path('beat/<int:id>/<str:opt>', BeatView.as_view()),

    path('artists/', ArtistListView.as_view()),
]