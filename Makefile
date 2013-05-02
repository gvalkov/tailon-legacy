LOGDIR := './logs'

.ONESHELL:
tmplog:
	python3 tests/utils.py \
		--update-msec '500,3000' \
		--truncate-msec '10000,20000' \
		--rate '1,3' \
		log start \
		$(LOGDIR)/nginx/access.log \
		$(LOGDIR)/nginx/error.log \
		$(LOGDIR)/apache/www.tailon.org/access.log \
		$(LOGDIR)/apache/www.tailon.org/error.log &
	echo $$! > .makepid

tmplog-stop:
	kill $$(cat .makepid)

start:
	tailon -a -f $(LOGDIR)/nginx/* $(LOGDIR)/apache/www.tailon.org/*
