# Generated by Django 3.2.4 on 2023-01-21 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pracownik_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='ksiazka',
            name='Ilosc',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
