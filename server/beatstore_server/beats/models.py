from django.db import models

# Create your models here.
class Artist(models.Model):
    name = models.CharField( max_length=50 )
    def __str__(self):
        return self.name

class Beat(models.Model):
    # Info
    name = models.CharField( max_length=50 )
    bpm = models.SmallIntegerField()
    artist = models.ForeignKey( Artist, on_delete=models.PROTECT )

    # Files
    wrap = models.ImageField( upload_to='wraps/', default='wraps/S.svg' )
    
    wave = models.FileField( upload_to='audio/wave/', default='' )
    mp3 = models.FileField( upload_to='audio/mp3/', default='' )

    def __str__(self):
        return self.name