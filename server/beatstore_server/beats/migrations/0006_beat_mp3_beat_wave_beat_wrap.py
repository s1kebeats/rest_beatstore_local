# Generated by Django 4.0.6 on 2022-07-25 05:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('beats', '0005_remove_beat_mp3_remove_beat_wave_remove_beat_wrap'),
    ]

    operations = [
        migrations.AddField(
            model_name='beat',
            name='mp3',
            field=models.FileField(default='', upload_to='audio/mp3/'),
        ),
        migrations.AddField(
            model_name='beat',
            name='wave',
            field=models.FileField(default='', upload_to='audio/wave/'),
        ),
        migrations.AddField(
            model_name='beat',
            name='wrap',
            field=models.ImageField(default='wraps/S.svg', upload_to='wraps/'),
        ),
    ]
