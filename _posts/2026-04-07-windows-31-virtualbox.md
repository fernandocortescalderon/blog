---
title: "Cómo instalar Windows 3.1 en VirtualBox, paso a paso"
description: "Instalación de Windows 3.1 desde cero en VirtualBox: la máquina virtual, MS-DOS como base y el asistente de instalación hasta llegar al Program Manager."
date: 2026-04-07 11:00:00 -0600
pillar: soporte
youtube: Q82cwAiqz9Y
image: /assets/img/posts/windows-31-virtualbox.jpg
---

Windows 3.1 no es un sistema operativo independiente: es un entorno gráfico
que se ejecuta sobre MS-DOS. Por eso su instalación empieza antes de
Windows, con una máquina virtual que ya tenga DOS funcionando. En esta guía
documento el proceso completo que sigo en el video.

## Lo que necesitas

- **VirtualBox** instalado.
- **MS-DOS instalado en la máquina virtual.** Windows 3.1 se instala y se
  ejecuta desde DOS.
- **La imagen de instalación de Windows 3.1.** La que uso en el video:
  [Internet Archive, Windows 3.1](https://archive.org/details/disk-1_202211).

> Windows 3.1 sigue siendo software de Microsoft. Internet Archive conserva
> software antiguo; el enlace se incluye con fines educativos.

## 1. Preparar la máquina virtual

En VirtualBox, **Nueva**, y en tipo de sistema elige **Microsoft Windows →
Windows 3.1**. Con eso VirtualBox propone valores de memoria y disco
adecuados para la época; puedes aceptarlos tal cual.

Antes de seguir, la máquina debe arrancar en MS-DOS y mostrar el indicador
`C:\>`.

## 2. Montar la imagen de instalación

Con la máquina encendida en DOS, monta la imagen de Windows 3.1 desde el
menú **Dispositivos** de VirtualBox. Si es una imagen de disquete, quedará
en la unidad `A:`; si es una imagen de CD, en la unidad de CD-ROM.

## 3. Ejecutar el instalador

Cambia a la unidad donde montaste la imagen y lanza el instalador:

```
C:\> A:
A:\> SETUP
```

El instalador ofrece dos modos:

- **Express Setup:** detecta el hardware y usa la configuración
  recomendada. Es la opción más directa.
- **Custom Setup:** permite elegir directorio, componentes y controladores.

Si la instalación usa varios disquetes, el asistente los pide en orden;
cámbialos desde **Dispositivos → Unidades de disquete**.

## 4. Iniciar Windows

Al terminar, el instalador regresa a DOS. Para iniciar Windows:

```
C:\> WIN
```

Aparece el **Program Manager**, con los grupos Main, Accessories, Games,
StartUp y Applications. Windows 3.1 queda listo para usarse.

## Siguiente paso

Este video es parte de la serie de instalación de sistemas operativos en
VirtualBox. La guía de [Windows 95]({{ '/windows-95-virtualbox/' | relative_url }})
continúa la serie con el primer Windows que ya no necesita DOS por separado.
