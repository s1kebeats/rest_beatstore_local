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
    downloads = models.IntegerField( default=0 )
    listenings = models.IntegerField( default=0 )

    # Files
    wrap = models.ImageField( upload_to='wraps/', default='wraps/S.svg' )
    
    wave = models.FileField( upload_to='audio/wave/', default='' )
    mp3 = models.FileField( upload_to='audio/mp3/', default='' )

    def incrementDownloads(self):
        self.downloads += 1
        self.save()
    
    def incrementListenings(self):
        self.listenings += 1
        self.save()

    def __str__(self):
        return self.name