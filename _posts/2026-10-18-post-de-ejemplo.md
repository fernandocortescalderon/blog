---
title: "Post de ejemplo: validando el diseño del blog"
description: "Un post de prueba que reúne todos los elementos del diseño: video, enlace al repositorio, código, tablas y citas."
date: 2026-10-18 10:00:00 -0600
pillar: ciberseguridad
youtube: jNQXAC9IVRw
repo: https://github.com/fernandocortescalderon/blog
image: /assets/img/posts/post-de-ejemplo.jpg
---

Este post existe solo para revisar el diseño. Contiene cada elemento que
puede aparecer en un artículo real, para comprobar que todos respetan la
identidad visual del sitio. **Bórralo cuando publiques el primer post.**

## Encabezado de segundo nivel

Un párrafo normal con un [enlace de ejemplo](https://cortescalderon.com),
texto en **negrita**, texto en *cursiva* y un fragmento de `código en línea`.

### Lista de verificación

- Revisar puertos abiertos con `nmap`.
- Validar las reglas del firewall.
- Documentar los hallazgos.

1. Primer paso numerado.
2. Segundo paso numerado.
3. Tercer paso numerado.

## Bloque de código

```bash
# Escaneo básico de servicios en un laboratorio propio
nmap -sV -p 1-1000 192.168.56.101
sudo ss -tulpn | grep LISTEN
```

```python
def es_puerto_valido(puerto: int) -> bool:
    """Valida que el puerto esté en el rango permitido."""
    return 0 < puerto <= 65535
```

## Cita

> La seguridad no es un producto, es un proceso.

## Tabla

| Herramienta | Uso                         | Pilar          |
|-------------|-----------------------------|----------------|
| Nmap        | Descubrimiento de servicios | Ciberseguridad |
| Wireshark   | Análisis de tráfico         | Ciberseguridad |
| PowerShell  | Automatización de soporte   | Soporte        |

---

Fin del post de ejemplo.
