FROM python:2

RUN pip install tailon

ENTRYPOINT ["tailon"]

# Examples:
# docker run --rm -v /var/log/app:/data --publish 9999:9999 tailon -b 0.0.0.0:9999 -a -f /data/\*
# docker run --rm -v /var/log/app:/data -v ./tailon.yaml:/etc/tailon.yaml --publish 127.0.0.1:9999:9999 tailon -c /etc/tailon.yaml
