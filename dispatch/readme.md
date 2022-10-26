You are probably familiar with the `dispatch` command from the React Redux library. You are going to implement something similar.
In Redux the `dispatch` command is used to send actions with payload to mutate the store. In this exercise, instead of the actual store
you have a `listenersMap`which collects events via `addEventListener` method and the `dispatch` method
that executes the listener when the event is _dispatched_.
You are asked to implement
- `listenersMap` data structure
- the methods `addEventListener` (each event can have multiple listeners!)
- and `dispatch` (that will send an event rather than an action).
