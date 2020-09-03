FROM neonlaw/base

ENTRYPOINT [ "./docker/shell.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]
