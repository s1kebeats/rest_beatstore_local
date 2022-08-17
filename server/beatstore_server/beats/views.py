from .serializers import ArtistSerializer, BeatSerializer
from .models import Artist, Beat

from rest_framework import filters, generics

# Create your views here.
class ArtistListView(generics.ListAPIView):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class BeatListView(generics.ListAPIView):
    serializer_class = BeatSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['id']

    def get_queryset(self):
        queryset = Beat.objects.all()
        artist = self.request.query_params.get('artist')
        bpm = self.request.query_params.get('bpm')
        name = self.request.query_params.get('name')

        if artist is not None:
            res = Beat.objects.none()
            for artist in artist.split(','):
                res = res | queryset.filter(artist__id=artist)
            queryset = res
        if bpm is not None:
            queryset = queryset.filter( bpm=bpm )
        if name is not None:
            queryset = queryset.filter( name__icontains=name )

        return queryset