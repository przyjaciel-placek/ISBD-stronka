# Generated by Django 3.2.4 on 2023-01-30 10:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Pracownik_app', '0004_ksiazka_zdjecie'),
    ]

    operations = [
        migrations.AddField(
            model_name='ksiazka',
            name='Opis',
            field=models.CharField(default='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', max_length=2000),
            preserve_default=False,
        ),
    ]
