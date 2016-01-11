

    function memberSetLocation() {
        //alert(Long+" - "+Lat);
        /* variable host declarer dans templateGenerator.js */
        var latitude = position.coords.latitude;//document.getElementById("lat").value;//Long;
        var longitude = position.coords.longitude;//document.getElementById("long").value;//Lat;
        var member_id = sessionStorage.getItem("identifiant");
        var urlWS = "http://api.chessfamily.net/api/query";
		
        $.ajax({
			type:"POST",
            url:urlWS,
            data:{
				authentication:"chessfemily",
				action:"member_location_set",
				member_id:member_id,
				latitude:latitude,
				longitude:longitude
			},
            dataType:"json",
			success:function(result){
				  alert('votre position est à jour');
			},
			error:function(e){
				alert(e.toSource());
				
			}
        });
    }




