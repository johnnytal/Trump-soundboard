var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px', fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });
        
        this.game.load.image("bg", "assets/trump/images/trump.jpg");
        this.game.load.spritesheet("button", "assets/trump/images/button4.png", 486/2, 185);
        this.game.load.image("gear", "assets/trump/images/gearBtn2.png");
        this.game.load.image("ok", "assets/trump/images/ok.png");
        this.game.load.image("musicBtn", "assets/trump/images/musicBtn.png");
        this.game.load.image("panel", "assets/trump/images/panel.png");

        this.game.load.audio('trump1', 'assets/trump/audio/trump1_bing2.ogg');
        this.game.load.audio('trump2', 'assets/trump/audio/trump12_poorly.ogg');
        this.game.load.audio('trump3', 'assets/trump/audio/trump13_money.ogg');
        this.game.load.audio('trump4', 'assets/trump/audio/trump14_rosie.ogg');
        this.game.load.audio('trump5', 'assets/trump/audio/trump2_quiet.ogg');
        this.game.load.audio('trump6', 'assets/trump/audio/trump3_suspense.ogg');
        this.game.load.audio('trump7', 'assets/trump/audio/trump4_bomb.ogg');
        this.game.load.audio('trump8', 'assets/trump/audio/trump5_wall.ogg');
        this.game.load.audio('trump9', 'assets/trump/audio/trump6_china2.ogg');
        this.game.load.audio('trump10', 'assets/trump/audio/trump7_billions.ogg');
        this.game.load.audio('trump11', 'assets/trump/audio/trump8_pussi.ogg');
        this.game.load.audio('trump12', 'assets/trump/audio/trump9_dontKnow.ogg');
        
        this.game.load.audio('music1', 'assets/trump/audio/music1.ogg');
        this.game.load.audio('music2', 'assets/trump/audio/music2.ogg');
        this.game.load.audio('music3', 'assets/trump/audio/music3.ogg');
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};