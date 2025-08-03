from django.db import models

class Post(models.Model):
    titulo = models.CharField(max_length=255)
    conteudo = models.TextField()
    imagem = models.ImageField(upload_to='posts/', null=True, blank=True)
    criado_em = models.DateTimeField(auto_now_add=True)
    atualizado_em = models.DateTimeField(auto_now=True)
    publicado = models.BooleanField(default=False)

    def __str__(self):
        return self.titulo
