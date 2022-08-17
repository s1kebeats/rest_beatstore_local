from rest_framework import serializers
from .models import Artist, Beat

class ArtistSerializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Artist
        fields = [ 'id', 'name' ]

class BeatSerializer( serializers.HyperlinkedModelSerializer ):
    artist = ArtistSerializer(
        read_only=True,
    )

    class Meta:
        model = Beat
        fields = [
            # Info
            'id', 'name', 'bpm', 
            'artist',
            # Files
            'wrap', 'wave', 'mp3',
        ]