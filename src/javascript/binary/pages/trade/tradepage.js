var TradePage = (function(){
	
	var onLoad = function(){
		BinarySocket.init({
			onmessage: function(msg){
				Message.process(msg);
			},
			onclose: function(){
				processMarketUnderlying();
			}
		});
		Price.clearFormId();
		TradingEvents.init();
		Content.populate();
		Symbols.getSymbols(1);
		if (document.getElementById('websocket_form')) {
		    addEventListenerForm();
		}
	};

	var onUnload = function(){
		forgetTradingStreams();
		BinarySocket.clear();
	};

	return {
		onLoad: onLoad,
		onUnload : onUnload
	};
})();