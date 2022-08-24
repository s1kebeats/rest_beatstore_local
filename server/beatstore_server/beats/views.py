from .serializers import ArtistSerializer, BeatSerializer
from .models import Artist, Beat

from rest_framework import filters, generics
from rest_framework.views import APIView

from django.http import Http404
from rest_framework import status
from rest_framework.response import Response

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

class BeatView(APIView):
    
    def get_object(self, id):
        try:
            return Beat.objects.get( id=id )
        except Beat.DoesNotExist:
            raise Http404

    def get(self, request, id, opt=''):
        snippet = self.get_object(id)
        if opt == 'download':
            snippet.incrementDownloads()
            return Response({ 'done' }, status=status.HTTP_200_OK)
        if opt == 'play':
            snippet.incrementListenings()
            return Response({ 'done' }, status=status.HTTP_200_OK)
        serializer = BeatSerializer(snippet)
        return Response(serializer.data, status=status.HTTP_200_OK)