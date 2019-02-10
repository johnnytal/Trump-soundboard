var gameMain = function(game){
    var sounds;
   
    multiSounds = false;
    
    playModes = ['toggle', 'trigger', 'gate', 'pause', 'none'];
    mode = playModes[1];
    
    musicPlayed = false;
};

gameMain.prototype = {
    create: function(){
        bg = this.add.image(0, 0, 'bg');
        bg.alpha = 0.7;
 
        buttonsGroup = game.add.physicsGroup(Phaser.Physics.ARCADE);

        button1 = buttonsGroup.create(20, 15, 'button');
        button2 = buttonsGroup.create(295, 15, 'button');
        button3 = buttonsGroup.create(570, 15, 'button');
        button4 = buttonsGroup.create(20, 235, 'button');
        button5 = buttonsGroup.create(295, 235, 'button');
        button6 = buttonsGroup.create(570, 235, 'button');
        
        button71 = buttonsGroup.create(20, 455, 'button');
        button81 = buttonsGroup.create(295, 455, 'button');
        button91 = buttonsGroup.create(570, 455, 'button');
        button101 = buttonsGroup.create(20, 675, 'button');
        button111 = buttonsGroup.create(295, 675, 'button');
        button121 = buttonsGroup.create(570, 675, 'button');
        
        button200 = buttonsGroup.create(450, 900, 'musicBtn');
        button200.tint = 0xffff00;
        
        button7 = this.add.sprite(650, 900, 'gear');
        button7.tint = 0xffff00;
        
        button1.inputEnabled = true;
        button2.inputEnabled = true;
        button3.inputEnabled = true;
        button4.inputEnabled = true;
        button5.inputEnabled = true;
        button6.inputEnabled = true;
        button71.inputEnabled = true;
        button81.inputEnabled = true;
        button91.inputEnabled = true;
        button101.inputEnabled = true;
        button111.inputEnabled = true;
        button7.inputEnabled = true;
        button121.inputEnabled = true;
        button200.inputEnabled = true;
               
        game.add.text(button3.x + 30, 60, 'Money', {
            font: '48px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button2.x + 30, 60, 'Poorly', {
            font: '44px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button1.x + 35, 60, 'Bing', {
            font: '48px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        
        game.add.text(button4.x + 45, 280, 'Rosie', {
            font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button5.x + 35, 280, 'Quiet', {
            font: '48px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button6.x + 5, 280, 'Suspense', {
            font: '44px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        
        game.add.text(button71.x + 40, 500, 'Bomb', {
            font: '48px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button81.x + 45, 500, 'Wall', {
            font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button91.x + 40, 500, 'China', {
            font: '48px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        
        game.add.text(button101.x + 20, 720, 'Billions', {
            font: '44px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        game.add.text(button111.x + 10, 720, "Grab 'em", {
            font: '44px ' + font, fill: 'yellow', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });
        
        game.add.text(button121.x + 30, 710, "Don't\nknow", {
            font: '48px ' + font, fill: 'white', fontWeight: 'normal', align: 'center',
            stroke:'darkblue', strokeThickness: 4
        });

		loadSounds();

        modal = new gameModal(game);
        
        buttons = [button1, button2, button3, button4, button5, button6, button71, button81, button91, button101, button111, button121];

        button1.events.onInputDown.add(function(){
            playSound(sfxtrump1, button1, 0xaa55ff, '#000055');
        }, this);
            
        button2.events.onInputDown.add(function(){
            playSound(sfxtrump2, button2, 0xaa55ff, '#00ff00');
        }, this);
        
        button3.events.onInputDown.add(function(){
            playSound(sfxtrump3, button3, 0xaa55ff, '#f3fff5');
        }, this);
        
        button4.events.onInputDown.add(function(){
            playSound(sfxtrump4, button4, 0xaa55ff, '#00ffff');
        }, this);
        
        button5.events.onInputDown.add(function(){
            playSound(sfxtrump5, button5, 0xaa55ff, '#000000');
        }, this);
        
        button6.events.onInputDown.add(function(){
            playSound(sfxtrump6, button6, 0xaa55ff, '#ffd00f');
        }, this);
        
        button71.events.onInputDown.add(function(){
            playSound(sfxtrump7, button71, 0xaa55ff, '#000055');
        }, this);
        
        button81.events.onInputDown.add(function(){
            playSound(sfxtrump8, button81, 0xaa55ff, '#00ff00');
        }, this);
        
        button91.events.onInputDown.add(function(){
            playSound(sfxtrump9, button91, 0xaa55ff, '#f3fff5');
        }, this);
        
        button101.events.onInputDown.add(function(){
            playSound(sfxtrump10, button101, 0xaa55ff, '#00ffff');
        }, this);
        
        button111.events.onInputDown.add(function(){
            playSound(sfxtrump11, button111, 0xaa55ff, '#ffd00f');
        }, this);
        
        button121.events.onInputDown.add(function(){
            playSound(sfxtrump12, button121, 0xaa55ff, '#000000');
        }, this);

        button7.events.onInputDown.add(function(){
            openOptions();
        }, this);
       
        button200.events.onInputDown.add(function(){
        	if (!musicPlayed){
           		musicPlayed = true;
           	 	sfxMusic.play();
           	 	button200.tint = 0xaa55ff;
            }
            else{
            	musicPlayed = false;
            	sfxMusic.stop();
            	button200.tint = 0xffffff;
            }
        }, this);
        
        for (b = 0; b< buttons.length; b++){
            buttons[b].events.onInputUp.add(function(){
                if (mode == 'gate') stopSounds();
            }, this);  
        } 
		
		setTimeout(function(){
			try{
                StatusBar.hide;
            } catch(e){} 
	        try{
	            window.plugins.insomnia.keepAwake();
	        } catch(e){}   
		}, 2000);
    }
};

function stopSounds(){
    for (n = 0; n < sounds.length; n++){
        sounds[n].stop();
    }   
}

function playSound(sound, button, color1, color2){

    if (!sound.isPlaying){
        if (!multiSounds) stopSounds();

        if (!sound.paused){
            sound.play();    
        }
        else{
            sound.resume();
        }

        button.tint = color1;
        sound.onStop.add(function(){
           button.tint = 0xffffff;
        }, this);
        
        game.stage.backgroundColor = color2;
    } 
    
    else{
        if (mode == 'toggle'){
            sound.stop();
            game.stage.backgroundColor = '#fffa6f';
        }
        else if (mode == 'trigger'){
            sound.play();
        }
        else if (mode == 'pause'){
            sound.pause();
        }
    }    
}

function openOptions(){
    button7.inputEnabled = false;
    optionsColor = '0x49FFFE';
    optionsFontSize = 45;
    
    modal.createModal({
        type:"options",
        includeBackground: true,
        modalCloseOnInput: false,
        itemsArr: [
            {
                type: "image", content: "panel", offsetY: 0, offsetX: 0, contentScale: 2
            },
            {
                type: "text", content: "Rewind mode:", fontSize: 34, color: "0xFEFF49",
                offsetY: -250, stroke: "0x000000", strokeThickness: 5, fontFamily: "Luckiest Guy",
            },
            {
                type: "text", content: "Toggle", fontSize: optionsFontSize, color: optionsColor,
                stroke: "0x000000", strokeThickness: 4,
                offsetY: -150, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[0], this);         
                }
            },
            {
                type: "text", content: "Trigger", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: -70, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[1], this);
                }
            },
            {
                type: "text", content: "Gate", fontSize: optionsFontSize, 
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 10, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[2], this);
                }
            },
            {
                type: "text", content: "Pause", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 90, fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[3], this);
                }
            },
            {
                type: "text", content: "None", fontSize: optionsFontSize,
                color: optionsColor, stroke: "0x000000", strokeThickness: 4,
                offsetY: 170,  fontFamily: "Luckiest Guy",
                callback: function () {
                    changePlayMode(playModes[4], this);
                }
            },
            {
                type: "text", content: "Allow Multichannel", fontSize: optionsFontSize, color: optionsColor,
                offsetY: 270, offsetX: 0,  fontFamily: "Luckiest Guy",
                stroke: "0x000000", strokeThickness: 3, 
                callback: function () {
                    allowMultiple(this);
                }
            },
            {
                type: "image", content: "ok", offsetY: 100, offsetX: 300, contentScale: 0.75,
                callback: function () {
                    modal.hideModal('options');
                    button7.inputEnabled = true;
                }
            },
        ]
   });
   
   modal.showModal("options"); 

   if (multiSounds) modal.getModalItem('options',9).tint = 0x00ff00;
   
   if (mode == 'toggle') modal.getModalItem('options',4).tint = 0x00ff00;
   else if (mode == 'trigger') modal.getModalItem('options',5).tint = 0x00ff00;
   else if (mode == 'gate') modal.getModalItem('options',6).tint = 0x00ff00;
   else if (mode == 'pause') modal.getModalItem('options',7).tint = 0x00ff00;
   else if (mode == 'none') modal.getModalItem('options',8).tint = 0x00ff00;

   for (n=0; n<11; n++){
       game.add.tween(modal.getModalItem('options',n)).from( { y: - 800 }, 500, Phaser.Easing.Linear.In, true);
   }    
}

function changePlayMode(_mode, btn){
    mode = _mode;
    for (n=8; n>3; n--){
        modal.getModalItem('options', n).tint = 0xffffff;
    }
    btn.tint = 0x00ff00;
}

function allowMultiple(btn){
    if (multiSounds) multiSounds = false;
    else { multiSounds = true; }
    
    if (btn.tint == 0xffffff) btn.tint = 0x00ff00;
    else { btn.tint = 0xffffff; }
}

function loadSounds(){
    sounds = [ 
        sfxtrump1 = game.add.audio('trump1'),
        sfxtrump2 = game.add.audio('trump2'),
        sfxtrump3 = game.add.audio('trump3'),
        sfxtrump4 = game.add.audio('trump4'),
        sfxtrump5 = game.add.audio('trump5'),
        sfxtrump6 = game.add.audio('trump6'),
        sfxtrump7 = game.add.audio('trump7'),
        sfxtrump8 = game.add.audio('trump8'),
        sfxtrump9 = game.add.audio('trump9'),
        sfxtrump10 = game.add.audio('trump10'),
        sfxtrump11 = game.add.audio('trump11'),
        sfxtrump12 = game.add.audio('trump12') 
    ];
    
    sfxMusic = game.add.audio('musicSfx', 0.65, true);
}

function initAd(){
    var admobid = {};

    admobid = {
        banner: 'ca-app-pub-9795366520625065/2986546604'
    };

    if(AdMob) AdMob.createBanner({
       adId: admobid.banner,
       position: AdMob.AD_POSITION.BOTTOM_CENTER,
       autoShow: true,
       isTesting: false
    });
}