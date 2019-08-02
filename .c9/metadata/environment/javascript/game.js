{"filter":false,"title":"game.js","tooltip":"/javascript/game.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":266,"column":6},"action":"remove","lines":["var round = 0;","$('#round').text(round);","","let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];","","var usedImages = {};","var usedImagesCount = 0;","","function displayImage(){","","    var num = Math.floor(Math.random() *11);","    if (!usedImages[num]){","        document.getElementById(\"newImage\").src = images[num];","        document.getElementById(\"newImageBack\").src= images[num];","        usedImages[num] = true;","        usedImagesCount++;","        round += 1;","        $('#round').text(round);","        if (usedImagesCount === images.length){","            usedImagesCount = 0;","            usedImages = {};","        }","        if (round > 10){","            $('#round').text(\"game over\");","            $('#newImage').hide();","        }","    } else {","        displayImage();","    }","}","","jQuery(document).ready(function($){","","    $(\"#buttonStart\").click(function(){","        $(\"#buttonStart\").hide();","        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];","","var usedImages = {};","var usedImagesCount = 0;","","function displayImage(){","","    var num = Math.floor(Math.random() *11);","    if (!usedImages[num]){","        document.getElementById(\"newImage\").src = images[num];","        document.getElementById(\"newImageBack\").src= images[num];","        usedImages[num] = true;","        usedImagesCount++;","        if (usedImagesCount === images.length){","            usedImagesCount = 0;","            usedImages = {};","        }","    } else {","        displayImage();","    }","} ","        $(\"#buttonHint\").show();","        $(\"#buttonNewImage\").show();","        $(\"#textField\").show();","        $(\"#scorebord\").show();","    });","","/*Hint Button*/","","    $(function(){","    ","$(\".flip-card-inner\").flip({ ","    trigger: \"manual\",","    speed: 800","});});","           $(\"#buttonHint\").click(function(){","            $(\"#newImage\").each(function() {","                  var nSrc= $(this).attr('src').replace(\"-empty.png\", \"-flag.png\");","                  $(this).attr('src', nSrc);","              });","            $(\"#newImageBack\").each(function() {","                var nSrc= $(this).attr('src').replace(\"-empty.png\", \"-flag.png\");","                $(this).attr('src', nSrc);","            });","              $(\"#buttonHint\").hide();  ","              $(\"#newImage\").addClass(\"gotHint\");","              $(\".flip-card-inner\").flip(true);","                          });  ","                        ","                                                                ","                          ","/*Next Button*/","$(\"#buttonNext\").click(function(){","                          $(\"#buttonNext\").hide();","                          $(\"#comment\").hide();","                          $(\"#buttonHint\").show();","                          $(\"#buttonNewImage\").show();","                          $(\"#textField\").show().val(\"\")","                          $(\"#newImage\").removeClass(\"gotHint gotRightAnswer gotWrongAnswer\")","                          });","","/*THIS IS HOW THE SCORBORD WORKS */","function myScore() {","    var $score = $(\"#scorebord\");","    $(\"#comment\").show().text(\"Yes, that's him\");","if","($(\"#newImage\").hasClass(\"gotHint\") &&  $(\"#newImage\").hasClass(\"gotWrongAnswer\"))","{","$score.val( parseInt($score.val()) + 1 );","}","else if","($(\"#newImage\").hasClass(\"gotHint\") || $(\"#newImage\").hasClass(\"gotWrongAnswer\"))","{","$score.val( parseInt($score.val()) + 2 );","}","else   ","{$score.val( parseInt($score.val()) + 3 );","}","       }      ","","       /*Check Answer*/","$(\"#buttonNewImage\").click(function(){","    $(\"#buttonNext\").show();","    $(\"#buttonHint\").hide();","    $(\"#buttonNewImage\").hide();","    $(\"#textField\").hide();","    var answer = $(\"#textField\").val(); ","    var nSrc = $(\"#newImage\").attr('src').replace(\"-empty\", \"\").replace(\"-flag\", \"\");","                $(\"#newImageBack\").attr('src').replace(\"-empty\", \"\").replace(\"-flag\", \"\");","                if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-1-empty.png\" && answer.toUpperCase() == \"JACQUES ANQUETIL\" || $(\"#newImage\").attr('src') == \"images/cyclist-1-flag.png\" && answer.toUpperCase() == \"JACQUES ANQUETIL\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                 } ","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-2-empty.png\" && answer.toUpperCase() == \"LANCE ARMSTRONG\" || $(\"#newImage\").attr('src') == \"images/cyclist-2-flag.png\" && answer.toUpperCase() == \"LANCE ARMSTRONG\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-3-empty.png\" && answer.toUpperCase() == \"GINO BARTALI\" || $(\"#newImage\").attr('src') == \"images/cyclist-3-flag.png\" && answer.toUpperCase() == \"GINO BARTALI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-4-empty.png\" && answer.toUpperCase() == \"FAUSTO COPPI\" || $(\"#newImage\").attr('src') == \"images/cyclist-4-flag.png\" && answer.toUpperCase() == \"FAUSTO COPPI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-5-empty.png\" && answer.toUpperCase() == \"MIGUEL INDURAIN\" || $(\"#newImage\").attr('src') == \"images/cyclist-5-flag.png\" && answer.toUpperCase() == \"MIGUEL INDURAIN\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-6-empty.png\" && answer.toUpperCase() == \"BERNARD HINAULT\" || $(\"#newImage\").attr('src') == \"images/cyclist-6-flag.png\" && answer.toUpperCase() == \"BERNARD HINAULT\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-7-empty.png\" && answer.toUpperCase() == \"LOUISON BOBET\" || $(\"#newImage\").attr('src') == \"images/cyclist-7-flag.png\" && answer.toUpperCase() == \"LOUISON BOBET\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-8-empty.png\" && answer.toUpperCase() == \"FELICE GIMONDI\" || $(\"#newImage\").attr('src') == \"images/cyclist-8-flag.png\" && answer.toUpperCase() == \"FELICE GIMONDI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-9-empty.png\" && answer.toUpperCase() == \"EDDY MERCKX\" || $(\"#newImage\").attr('src') == \"images/cyclist-9-flag.png\" && answer.toUpperCase() == \"EDDY MERCKX\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-10-empty.png\" && answer.toUpperCase() == \"SEAN KELLY\" || $(\"#newImage\").attr('src') == \"images/cyclist-10-flag.png\" && answer.toUpperCase() == \"SEAN KELLY\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-11-empty.png\" && answer.toUpperCase() == \"ALFREDO BINDA\" || $(\"#newImage\").attr('src') == \"images/cyclist-11-flag.png\" && answer.toUpperCase() == \"ALFREDO BINDA\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-12-empty.png\" && answer.toUpperCase() == \"RIK VAN STEENBERGEN\" || $(\"#newImage\").attr('src') == \"images/cyclist-12-flag.png\" && answer.toUpperCase() == \"RIK VAN STEENBERGEN\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-13-empty.png\" && answer.toUpperCase() == \"OSCAR FREIRE\" || $(\"#newImage\").attr('src') == \"images/cyclist-13-flag.png\" && answer.toUpperCase() == \"OSCAR FREIRE\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-14-empty.png\" && answer.toUpperCase() == \"LAURENT JALABERT\" || $(\"#newImage\").attr('src') == \"images/cyclist-14-flag.png\" && answer.toUpperCase() == \"LAURENT JALABERT\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                }       ","                else{","                    if","                    ($(\"#newImage\").hasClass(\"gotWrongAnswer\")){","                    $(\"#newImage\").attr('src', nSrc);","                    $(\"#buttonNext\").show();","                    $(\"#comment\").show().text(\"Sorry, no score\");","                    }","                    else{","                $(\"#comment\").show().text(\"Nope, that's not him\");","                $(\"#buttonAnotherTry\").show();","                $(\"#buttonGiveUp\").show(); ","                $(\"#buttonNext\").hide();","                $(\"#newImage\").addClass(\"gotWrongAnswer\");   ","                }","            }","          });","","/*After Wrong Answer */","$(\"#buttonAnotherTry\").click(function(){","    $(\"#comment\").hide();","    $(\"#buttonAnotherTry\").hide();","    $(\"#buttonGiveUp\").hide();","    $(\"#buttonNewImage\").show();","    $(\"#textField\").show();","    if ","                ($(\"#newImage\").attr('src').endsWith(\"empty.png\"))","                {","                $(\"#buttonHint\").show();","                } ","                else if","                ($(\"#newImage\").attr('src').endsWith(\"flag.png\"))","                {","                $(\"#buttonHint\").hide();","                }","});","","$(\"#buttonGiveUp\").click(function(){","    $(\"#newImage\").each(function() {","        var nSrc= $(this).attr('src').replace(\"-empty.png\", \".png\").replace(\"-flag.png\", \".png\") ;","        $(this).attr('src', nSrc);","    });","    $(\"#comment\").show().text(\"Sorry, no score\");","    $(\"#buttonAnotherTry\").hide();","    $(\"#buttonGiveUp\").hide();","    $(\"#buttonNext\").show();","});});"],"id":571},{"start":{"row":0,"column":0},"end":{"row":269,"column":6},"action":"insert","lines":["var round = 0;","$('#round').text(round);","","let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];","","var usedImages = {};","var usedImagesCount = 0;","","function displayImage(){","","    var num = Math.floor(Math.random() *11);","    if (!usedImages[num]){","        document.getElementById(\"newImage\").src = images[num];","        document.getElementById(\"newImageBack\").src= images[num];","        usedImages[num] = true;","        usedImagesCount++;","        round += 1;","        $('#round').text(round);","        if (usedImagesCount === images.length){","            usedImagesCount = 0;","            usedImages = {};","        }","        if (round > 10){","            $('#round').text(\"game over\");","            $('#newImage').hide();","        }","    } else {","        displayImage();","    }","}","","jQuery(document).ready(function($){","","    $(\"#buttonStart\").click(function(){","        $(\"#buttonStart\").hide();","        let images = ['images/cyclist-1-empty.png', 'images/cyclist-2-empty.png', 'images/cyclist-3-empty.png', 'images/cyclist-4-empty.png', 'images/cyclist-5-empty.png', 'images/cyclist-6-empty.png', 'images/cyclist-7-empty.png', 'images/cyclist-8-empty.png', 'images/cyclist-9-empty.png', 'images/cyclist-10-empty.png', 'images/cyclist-11-empty.png', 'images/cyclist-12-empty.png', 'images/cyclist-13-empty.png', 'images/cyclist-14-empty.png'];","","var usedImages = {};","var usedImagesCount = 0;","","function displayImage(){","","    var num = Math.floor(Math.random() *11);","    if (!usedImages[num]){","        document.getElementById(\"newImage\").src = images[num];","        document.getElementById(\"newImageBack\").src= images[num];","        usedImages[num] = true;","        usedImagesCount++;","        if (usedImagesCount === images.length){","            usedImagesCount = 0;","            usedImages = {};","        }","    } else {","        displayImage();","    }","} ","        $(\"#buttonHint\").show();","        $(\"#buttonNewImage\").show();","        $(\"#textField\").show();","        $(\"#scorebord\").show();","    });","","/*Hint Button*/","","    $(function(){","    ","$(\".flip-card-inner\").flip({ ","    trigger: \"manual\",","    speed: 800","});","           $(\"#buttonHint\").click(function(){","            $(\"#newImage\").each(function() {","                  var nSrc= $(this).attr('src').replace(\"-empty.png\", \"-flag.png\");","                  setTimeout(function() {","                      $(this).attr('src', nSrc);","                    })   ","                }, 400);","              ","            $(\"#newImageBack\").each(function() {","                var nSrc= $(this).attr('src').replace(\"-empty.png\", \"-flag.png\");","                $(this).attr('src', nSrc);","            });","              $(\"#buttonHint\").hide();  ","              $(\"#newImage\").addClass(\"gotHint\");","              $(\".flip-card-inner\").flip(true);","                          });  });","                        ","                                                                ","                          ","/*Next Button*/","$(\"#buttonNext\").click(function(){","                          $(\"#buttonNext\").hide();","                          $(\"#comment\").hide();","                          $(\"#buttonHint\").show();","                          $(\"#buttonNewImage\").show();","                          $(\"#textField\").show().val(\"\")","                          $(\"#newImage\").removeClass(\"gotHint gotRightAnswer gotWrongAnswer\")","                          });","","/*THIS IS HOW THE SCORBORD WORKS */","function myScore() {","    var $score = $(\"#scorebord\");","    $(\"#comment\").show().text(\"Yes, that's him\");","if","($(\"#newImage\").hasClass(\"gotHint\") &&  $(\"#newImage\").hasClass(\"gotWrongAnswer\"))","{","$score.val( parseInt($score.val()) + 1 );","}","else if","($(\"#newImage\").hasClass(\"gotHint\") || $(\"#newImage\").hasClass(\"gotWrongAnswer\"))","{","$score.val( parseInt($score.val()) + 2 );","}","else   ","{$score.val( parseInt($score.val()) + 3 );","}","       }      ","","       /*Check Answer*/","$(\"#buttonNewImage\").click(function(){","    $(\"#buttonNext\").show();","    $(\"#buttonHint\").hide();","    $(\"#buttonNewImage\").hide();","    $(\"#textField\").hide();","    var answer = $(\"#textField\").val(); ","    var nSrc = $(\"#newImage\").attr('src').replace(\"-empty\", \"\").replace(\"-flag\", \"\");","                $(\"#newImageBack\").attr('src').replace(\"-empty\", \"\").replace(\"-flag\", \"\");","                if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-1-empty.png\" && answer.toUpperCase() == \"JACQUES ANQUETIL\" || $(\"#newImage\").attr('src') == \"images/cyclist-1-flag.png\" && answer.toUpperCase() == \"JACQUES ANQUETIL\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                 } ","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-2-empty.png\" && answer.toUpperCase() == \"LANCE ARMSTRONG\" || $(\"#newImage\").attr('src') == \"images/cyclist-2-flag.png\" && answer.toUpperCase() == \"LANCE ARMSTRONG\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-3-empty.png\" && answer.toUpperCase() == \"GINO BARTALI\" || $(\"#newImage\").attr('src') == \"images/cyclist-3-flag.png\" && answer.toUpperCase() == \"GINO BARTALI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-4-empty.png\" && answer.toUpperCase() == \"FAUSTO COPPI\" || $(\"#newImage\").attr('src') == \"images/cyclist-4-flag.png\" && answer.toUpperCase() == \"FAUSTO COPPI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-5-empty.png\" && answer.toUpperCase() == \"MIGUEL INDURAIN\" || $(\"#newImage\").attr('src') == \"images/cyclist-5-flag.png\" && answer.toUpperCase() == \"MIGUEL INDURAIN\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-6-empty.png\" && answer.toUpperCase() == \"BERNARD HINAULT\" || $(\"#newImage\").attr('src') == \"images/cyclist-6-flag.png\" && answer.toUpperCase() == \"BERNARD HINAULT\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-7-empty.png\" && answer.toUpperCase() == \"LOUISON BOBET\" || $(\"#newImage\").attr('src') == \"images/cyclist-7-flag.png\" && answer.toUpperCase() == \"LOUISON BOBET\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-8-empty.png\" && answer.toUpperCase() == \"FELICE GIMONDI\" || $(\"#newImage\").attr('src') == \"images/cyclist-8-flag.png\" && answer.toUpperCase() == \"FELICE GIMONDI\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-9-empty.png\" && answer.toUpperCase() == \"EDDY MERCKX\" || $(\"#newImage\").attr('src') == \"images/cyclist-9-flag.png\" && answer.toUpperCase() == \"EDDY MERCKX\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-10-empty.png\" && answer.toUpperCase() == \"SEAN KELLY\" || $(\"#newImage\").attr('src') == \"images/cyclist-10-flag.png\" && answer.toUpperCase() == \"SEAN KELLY\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-11-empty.png\" && answer.toUpperCase() == \"ALFREDO BINDA\" || $(\"#newImage\").attr('src') == \"images/cyclist-11-flag.png\" && answer.toUpperCase() == \"ALFREDO BINDA\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-12-empty.png\" && answer.toUpperCase() == \"RIK VAN STEENBERGEN\" || $(\"#newImage\").attr('src') == \"images/cyclist-12-flag.png\" && answer.toUpperCase() == \"RIK VAN STEENBERGEN\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-13-empty.png\" && answer.toUpperCase() == \"OSCAR FREIRE\" || $(\"#newImage\").attr('src') == \"images/cyclist-13-flag.png\" && answer.toUpperCase() == \"OSCAR FREIRE\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                myScore();","                }","                else if ","                ($(\"#newImage\").attr('src') == \"images/cyclist-14-empty.png\" && answer.toUpperCase() == \"LAURENT JALABERT\" || $(\"#newImage\").attr('src') == \"images/cyclist-14-flag.png\" && answer.toUpperCase() == \"LAURENT JALABERT\")","                {","                $(\"#newImage\").attr('src', nSrc);","                $(\"#newImageBack\").attr('src', nSrc);","                }       ","                else{","                    if","                    ($(\"#newImage\").hasClass(\"gotWrongAnswer\")){","                    $(\"#newImage\").attr('src', nSrc);","                    $(\"#buttonNext\").show();","                    $(\"#comment\").show().text(\"Sorry, no score\");","                    }","                    else{","                $(\"#comment\").show().text(\"Nope, that's not him\");","                $(\"#buttonAnotherTry\").show();","                $(\"#buttonGiveUp\").show(); ","                $(\"#buttonNext\").hide();","                $(\"#newImage\").addClass(\"gotWrongAnswer\");   ","                }","            }","          });","","/*After Wrong Answer */","$(\"#buttonAnotherTry\").click(function(){","    $(\"#comment\").hide();","    $(\"#buttonAnotherTry\").hide();","    $(\"#buttonGiveUp\").hide();","    $(\"#buttonNewImage\").show();","    $(\"#textField\").show();","    if ","                ($(\"#newImage\").attr('src').endsWith(\"empty.png\"))","                {","                $(\"#buttonHint\").show();","                } ","                else if","                ($(\"#newImage\").attr('src').endsWith(\"flag.png\"))","                {","                $(\"#buttonHint\").hide();","                }","});","","$(\"#buttonGiveUp\").click(function(){","    $(\"#newImage\").each(function() {","        var nSrc= $(this).attr('src').replace(\"-empty.png\", \".png\").replace(\"-flag.png\", \".png\") ;","        $(this).attr('src', nSrc);","    });","    $(\"#comment\").show().text(\"Sorry, no score\");","    $(\"#buttonAnotherTry\").hide();","    $(\"#buttonGiveUp\").hide();","    $(\"#buttonNext\").show();","});});"]}]]},"ace":{"folds":[],"scrolltop":3171.46875,"scrollleft":0,"selection":{"start":{"row":269,"column":6},"end":{"row":269,"column":6},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":41,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1564756344520,"hash":"5739bde77dc02b7ad51a640ae13265b8a32e4ab6"}