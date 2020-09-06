FROM docker.pkg.github.com/neonlaw/codebase/base:latest

ENTRYPOINT [ "./docker/shell.entrypoint.sh" ]

CMD [ "tail", "-f", "/dev/null"]
