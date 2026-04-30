document.addEventListener('DOMContentLoaded', () => {
    
    
    const bazaDateOrare = {
        "101 Tg Cucu – Dorobant": {
            "dus": { "lucratoare": ["04:15", "05:15", "06:15", "07:15", "08:45", "10:15", "12:15", "13:15", "14:15", "15:15", "16:15", "17:15", "18:15", "19:45", "21:15", "22:30"], "weekend": ["05:45", "07:15", "08:45", "12:15", "14:15", "16:15", "18:15", "20:15"] },
            "intors": { "lucratoare": ["05:00", "06:00", "07:00", "08:00", "09:30", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:30", "22:00"], "weekend": ["06:30", "08:00", "09:30", "13:00", "15:00", "17:00", "19:00", "21:00"] }
        },
        "102 Tg Cucu – Aroneanu": {
            "dus": { "lucratoare": ["05:30", "06:30", "07:30", "09:30", "10:30", "11:30", "12:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "20:00", "21:30"], "weekend": ["06:30", "07:30", "09:30", "11:30", "13:30", "15:30", "17:30", "19:30"] },
            "intors": { "lucratoare": ["06:00", "07:00", "08:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:30", "22:00"], "weekend": ["07:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"] }
        },
        "103 Tg Cucu – Sorogari": {
            "dus": { "lucratoare": ["05:30", "06:30", "07:30", "09:30", "11:30", "13:30", "14:30", "15:30", "16:30", "17:30", "18:30", "20:30"], "weekend": ["06:30", "08:30", "11:30", "14:30", "17:30", "20:30"] },
            "intors": { "lucratoare": ["06:00", "07:00", "08:00", "10:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "21:00"], "weekend": ["07:00", "09:00", "12:00", "15:00", "18:00", "21:00"] }
        },
        "104 Primaria Aroneanu – Rediu Aldei": {
            "dus": { "lucratoare": ["06:00", "07:00", "11:00", "15:00", "18:00"], "weekend": ["08:00", "12:00", "16:00"] },
            "intors": { "lucratoare": ["05:30", "07:30", "11:30", "15:30", "18:30"], "weekend": ["08:30", "12:30", "16:30"] }
        },
        "201 Podu Roș – Todirel": {
            "dus": { "lucratoare": ["05:00", "06:10", "07:20", "08:30", "10:30", "12:30", "14:30", "15:40", "16:50", "18:00", "19:30", "21:30"], "weekend": ["06:30", "08:30", "11:30", "14:30", "17:30", "20:30"] },
            "intors": { "lucratoare": ["05:35", "06:45", "07:55", "09:05", "11:05", "13:05", "15:05", "16:15", "17:25", "18:35", "20:05", "22:05"], "weekend": ["07:05", "09:05", "12:05", "15:05", "18:05", "21:05"] }
        },
        "202 Podu Ros – Paun": {
            "dus": { "lucratoare": ["05:30", "06:40", "07:50", "09:30", "11:30", "13:30", "15:00", "16:20", "17:40", "19:00", "20:30"], "weekend": ["07:00", "09:30", "12:30", "15:30", "18:30"] },
            "intors": { "lucratoare": ["06:05", "07:15", "08:25", "10:05", "12:05", "14:05", "15:35", "16:55", "18:15", "19:35", "21:05"], "weekend": ["07:35", "10:05", "13:05", "16:05", "19:05"] }
        },
        "203 Podu ros – Visan": {
            "dus": { "lucratoare": ["06:00", "07:30", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "21:00"], "weekend": ["07:00", "10:00", "14:00", "18:00"] },
            "intors": { "lucratoare": ["06:45", "08:15", "09:45", "11:45", "13:45", "15:45", "17:45", "19:45", "21:45"], "weekend": ["07:45", "10:45", "14:45", "18:45"] }
        },
        "204 Pietrăria – Vișan": {
            "dus": { "lucratoare": ["06:15", "08:15", "12:15", "14:15", "16:15", "18:15"], "weekend": ["08:15", "12:15", "16:15"] },
            "intors": { "lucratoare": ["07:00", "09:00", "13:00", "15:00", "17:00", "19:00"], "weekend": ["09:00", "13:00", "17:00"] }
        },
        "301 Selgros – Dumbrava": {
            "dus": { "lucratoare": ["05:15", "06:15", "07:15", "08:15", "10:15", "12:15", "14:15", "15:15", "16:15", "17:15", "18:15", "20:15"], "weekend": ["07:15", "09:15", "12:15", "15:15", "18:15", "21:15"] },
            "intors": { "lucratoare": ["05:45", "06:45", "07:45", "08:45", "10:45", "12:45", "14:45", "15:45", "16:45", "17:45", "18:45", "20:45"], "weekend": ["07:45", "09:45", "12:45", "15:45", "18:45", "21:45"] }
        },
        "401 Tatarasi Sud – Rusenii Noi": {
            "dus": { "lucratoare": ["05:00", "06:00", "07:00", "08:00", "10:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "20:00"], "weekend": ["07:00", "09:00", "12:00", "15:00", "18:00", "21:00"] },
            "intors": { "lucratoare": ["05:30", "06:30", "07:30", "08:30", "10:30", "12:30", "14:30", "15:30", "16:30", "17:30", "18:30", "20:30"], "weekend": ["07:30", "09:30", "12:30", "15:30", "18:30", "21:30"] }
        },
        "23/23B Podu Roș – Proselnici": {
            "dus": { "lucratoare": ["05:15", "06:00", "07:15", "08:30", "10:30", "12:30", "14:15", "15:30", "16:45", "18:00", "20:00", "22:15"], "weekend": ["06:00", "08:30", "11:30", "14:30", "17:30", "20:30"] },
            "intors": { "lucratoare": ["05:50", "06:45", "08:00", "09:15", "11:15", "13:15", "15:00", "16:15", "17:30", "18:45", "20:45", "23:00"], "weekend": ["06:45", "09:15", "12:15", "15:15", "18:15", "21:15"] }
        },
        "501/501B Podu Ros – Ferma Liliac": {
            "dus": { "lucratoare": ["05:00", "05:45", "06:30", "07:15", "08:00", "09:30", "11:00", "12:30", "13:45", "14:30", "15:15", "16:00", "16:45", "17:30", "18:15", "19:45", "21:15", "22:30"], "weekend": ["05:45", "07:15", "08:45", "10:15", "11:45", "13:15", "14:45", "16:15", "17:45", "19:15", "20:45"] },
            "intors": { "lucratoare": ["05:40", "06:25", "07:10", "07:55", "08:40", "10:10", "11:40", "13:10", "14:25", "15:10", "15:55", "16:40", "17:25", "18:10", "18:55", "20:25", "21:55", "23:10"], "weekend": ["06:25", "07:55", "09:25", "10:55", "12:25", "13:55", "15:25", "16:55", "18:25", "19:55", "21:25"] }
        },
        "502 C.U.G I (Selgros) – Ciurbești": {
            "dus": { "lucratoare": ["05:15", "06:15", "07:15", "08:30", "10:30", "12:30", "14:15", "15:30", "16:45", "18:00", "19:30", "21:30"], "weekend": ["06:30", "08:30", "11:30", "14:30", "17:30", "20:30"] },
            "intors": { "lucratoare": ["05:45", "06:45", "07:45", "09:00", "11:00", "13:00", "14:45", "16:00", "17:15", "18:30", "20:00", "22:00"], "weekend": ["07:00", "09:00", "12:00", "15:00", "18:00", "21:00"] }
        },
        "503 Selgros – Valea Adâncă": {
            "dus": { "lucratoare": ["05:30", "06:30", "07:30", "08:30", "10:00", "11:30", "13:00", "14:30", "15:30", "16:30", "17:30", "18:30", "20:00", "22:00"], "weekend": ["06:00", "08:00", "10:30", "13:00", "15:30", "18:00", "21:00"] },
            "intors": { "lucratoare": ["06:00", "07:00", "08:00", "09:00", "10:30", "12:00", "13:30", "15:00", "16:00", "17:00", "18:00", "19:00", "20:30", "22:30"], "weekend": ["06:30", "08:30", "11:00", "13:30", "16:00", "18:30", "21:30"] }
        },
        "601 Targu Cucu – Popricani": {
            "dus": { "lucratoare": ["05:15", "06:30", "07:45", "10:00", "12:15", "14:30", "15:45", "17:00", "18:30", "21:30"], "weekend": ["07:30", "10:30", "13:30", "16:30", "19:30"] },
            "intors": { "lucratoare": ["05:50", "07:05", "08:20", "10:35", "12:50", "15:05", "16:20", "17:35", "19:05", "22:05"], "weekend": ["08:05", "11:05", "14:05", "17:05", "20:05"] }
        },
        "602 Targu Cucu – CuzaVoda": {
            "dus": { "lucratoare": ["05:45", "06:45", "07:45", "10:00", "12:00", "14:30", "15:45", "17:00", "18:30"], "weekend": ["08:00", "11:00", "14:00", "17:00"] },
            "intors": { "lucratoare": ["06:15", "07:15", "08:15", "10:30", "12:30", "15:00", "16:15", "17:30", "19:00"], "weekend": ["08:30", "11:30", "14:30", "17:30"] }
        },
        "603 Popricani – Tipilest": {
            "dus": { "lucratoare": ["06:00", "08:00", "12:00", "14:00", "16:00"], "weekend": ["08:00", "12:00", "16:00"] },
            "intors": { "lucratoare": ["06:30", "08:30", "12:30", "14:30", "16:30"], "weekend": ["08:30", "12:30", "16:30"] }
        },
        "701 Rond Copou – Horlesti": {
            "dus": { "lucratoare": ["05:10", "06:30", "07:50", "10:10", "12:30", "14:40", "16:00", "17:20", "19:30", "21:30"], "weekend": ["07:15", "09:45", "12:15", "14:45", "17:15", "19:45"] },
            "intors": { "lucratoare": ["05:50", "07:10", "08:30", "10:50", "13:10", "15:20", "16:40", "18:00", "20:10", "22:10"], "weekend": ["07:55", "10:25", "12:55", "15:25", "17:55", "20:25"] }
        },
        "702 Rond Păcurari – Copou": {
            "dus": { "lucratoare": ["05:45", "06:45", "07:45", "09:00", "11:00", "13:00", "14:30", "16:00", "17:30", "19:00"], "weekend": ["08:00", "10:00", "12:30", "15:00", "17:30"] },
            "intors": { "lucratoare": ["06:15", "07:15", "08:15", "09:30", "11:30", "13:30", "15:00", "16:30", "18:00", "19:30"], "weekend": ["08:30", "10:30", "13:00", "15:30", "18:00"] }
        },
        "29 Podu Roș – Tomești": {
            "dus": { "lucratoare": ["05:10", "06:00", "06:50", "07:40", "09:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:15"], "weekend": ["06:30", "08:30", "12:00", "16:00", "20:00"] },
            "intors": { "lucratoare": ["05:40", "06:30", "07:20", "08:10", "09:30", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30", "22:45"], "weekend": ["07:00", "09:00", "12:30", "16:30", "20:30"] }
        },
        "801 Podu Roș – Goruni": {
            "dus": { "lucratoare": ["05:30", "06:40", "07:50", "10:00", "12:30", "14:30", "16:30", "18:30", "21:00"], "weekend": ["07:30", "11:00", "14:30", "18:00"] },
            "intors": { "lucratoare": ["06:05", "07:15", "08:25", "10:35", "13:05", "15:05", "17:05", "19:05", "21:35"], "weekend": ["08:05", "11:35", "15:05", "18:35"] }
        },
        "802 Podu Roș – Chicerea": {
            "dus": { "lucratoare": ["06:15", "08:15", "11:15", "13:15", "15:15", "17:15", "19:15"], "weekend": ["09:00", "13:00", "17:00"] },
            "intors": { "lucratoare": ["06:50", "08:50", "11:50", "13:50", "15:50", "17:50", "19:50"], "weekend": ["09:35", "13:35", "17:35"] }
        },
        "901 Str. Bacinschi – Valea Lupului": {
            "dus": { "lucratoare": ["05:30", "06:15", "07:00", "08:30", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"], "weekend": ["06:30", "08:30", "11:30", "14:30", "17:30"] },
            "intors": { "lucratoare": ["06:00", "06:45", "07:30", "09:00", "10:30", "12:30", "14:30", "16:30", "18:30", "20:30"], "weekend": ["07:00", "09:00", "12:00", "15:00", "18:00"] }
        },
        "902 Canta – Valea Lupului": {
            "dus": { "lucratoare": ["06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00"], "weekend": ["08:00", "12:00", "16:00"] },
            "intors": { "lucratoare": ["06:30", "08:30", "10:30", "12:30", "14:30", "16:30", "18:30"], "weekend": ["08:30", "12:30", "16:30"] }
        }
    };

    
    const dateTrasee = {
        "Aroneanu": ["101 Tg Cucu – Dorobant", "102 Tg Cucu – Aroneanu", "103 Tg Cucu – Sorogari", "104 Primaria Aroneanu – Rediu Aldei"],
        "Barnova": ["201 Podu Roș – Todirel", "202 Podu Ros – Paun", "203 Podu ros – Visan", "204 Pietrăria – Vișan"],
        "Ciurea": ["301 Selgros – Dumbrava"],
        "Holboca": ["401 Tatarasi Sud – Rusenii Noi", "402 sat Valea Lunga (“indisponibil”)*"],
        "Miroslava": ["23/23B Podu Roș – Proselnici", "501/501B Podu Ros – Ferma Liliac", "502 C.U.G I (Selgros) – Ciurbești", "503 Selgros – Valea Adâncă", "504 Valea Ursului (“indisponibil”)*", "506 Tehnopolis – DANCAȘ (“indisponibil”)*", "507 Valea Adanca – Balciu (“indisponibil”)*", "508 Metro – Uricani (“indisponibil”)*"],
        "Popricani": ["601 Targu Cucu – Popricani", "602 Targu Cucu – CuzaVoda", "603 Popricani – Tipilest"],
        "Rediu": ["701 Rond Copou – Horlesti", "702 Rond Păcurari – Copou"],
        "Tomesti": ["29 Podu Roș – Tomești", "801 Podu Roș – Goruni", "802 Podu Roș – Chicerea"],
        "ValeaLupului": ["901 Str. Bacinschi – Valea Lupului", "902 Canta – Valea Lupului"]
    };

    let currentRoute = "", currentDir = "dus", currentDay = "lucratoare";

    
    const selectPlecare = document.getElementById('select-plecare');
    const selectTraseu = document.getElementById('select-traseu');
    const resultsSection = document.getElementById('results-section');
    const hoursDisplay = document.getElementById('hours-display');
    const msgIndisponibil = document.getElementById('msg-indisponibil');

   
    selectPlecare.addEventListener('change', function() {
        const trasee = dateTrasee[this.value] || [];
        selectTraseu.innerHTML = '<option value="" disabled selected>ALEGE TRASEUL</option>';
        selectTraseu.disabled = false;
        msgIndisponibil.style.display = 'none';
        
        trasee.forEach(t => {
            const opt = document.createElement('option');
            opt.value = t; opt.textContent = t;
            selectTraseu.appendChild(opt);
        });
    });

    
    function updateTimetable() {
        const routeData = bazaDateOrare[currentRoute];
        hoursDisplay.innerHTML = '';
        
        if (routeData && routeData[currentDir] && routeData[currentDir][currentDay]) {
            routeData[currentDir][currentDay].forEach(ora => {
                const div = document.createElement('div');
                div.className = 'hour-item'; div.textContent = ora;
                hoursDisplay.appendChild(div);
            });
        } else {
            hoursDisplay.innerHTML = '<p style="grid-column: 1/-1; text-align:center; padding:20px; color:#888;">Orarul pentru această selecție nu este complet momentan.</p>';
        }
    }

    
    document.getElementById('route-search').addEventListener('submit', function(e) {
        e.preventDefault();
        const tVal = selectTraseu.value;
        msgIndisponibil.style.display = 'none'; 
        
        if (tVal && tVal.includes("indisponibil")) {
            msgIndisponibil.style.display = 'block';
            resultsSection.style.display = 'none';
        } else if (tVal) {
            currentRoute = tVal.trim();
            resultsSection.style.display = 'flex'; 
            document.getElementById('res-titlu-traseu').textContent = currentRoute;
            updateTimetable();
            
            setTimeout(() => {
                window.scrollTo({ 
                    top: resultsSection.offsetTop - 20, 
                    behavior: 'smooth' 
                });
            }, 150);
        }
    });

    
    document.querySelectorAll('.dir-btn, .day-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if(this.dataset.dir) currentDir = this.dataset.dir;
            if(this.dataset.day) currentDay = this.dataset.day;
            
            updateTimetable();
        });
    });

    
    const modal = document.getElementById("tickets-modal");
    
    document.getElementById("btn-open-modal").onclick = () => { 
        modal.style.display = "block"; 
        document.body.style.overflow = "hidden"; 
    };
    
    document.querySelector(".close-modal").onclick = () => { 
        modal.style.display = "none"; 
        document.body.style.overflow = "auto"; 
    };
    
    window.onclick = (e) => { 
        if(e.target == modal) { 
            modal.style.display = "none"; 
            document.body.style.overflow = "auto"; 
        } 
    };

    
    document.querySelectorAll('.btn-buy-now').forEach(btn => {
        btn.onclick = () => {
            const userAgent = navigator.userAgent || navigator.vendor;
            const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
            
            if (isMobile) {
                if (/android/i.test(userAgent)) {
                    window.location.href = "https://play.google.com/store/apps/details?id=ro.pavia.pay24";
                } else {
                    window.location.href = "https://apps.apple.com/ro/app/24pay/id1352136015";
                }
            } else {
                window.open("https://www.24pay.ro/", "_blank");
            }
        };
    });

    
    const menuToggle = document.getElementById('mobile-menu');
    if (menuToggle) {
        menuToggle.onclick = () => {
            document.getElementById('nav-menu').classList.toggle('active');
        };
    }
    
    const btnNextBus = document.getElementById('btn-next-bus');
    
    if (btnNextBus) {
        btnNextBus.addEventListener('click', function() {
            // 1. Ștergem orice evidențiere anterioară
            document.querySelectorAll('.hour-item').forEach(item => {
                item.classList.remove('next-departure');
            });

            
            const now = new Date();
            const currentHour = now.getHours();
            const currentMinute = now.getMinutes();
            const currentTimeInMinutes = currentHour * 60 + currentMinute;

            const routeData = bazaDateOrare[currentRoute];
            
           
            if (routeData && routeData[currentDir] && routeData[currentDir][currentDay]) {
                const orar = routeData[currentDir][currentDay];
                let foundIndex = -1;

                
                for (let i = 0; i < orar.length; i++) {
                    const [h, m] = orar[i].split(':').map(Number);
                    const scheduleTimeInMinutes = h * 60 + m;

                    if (scheduleTimeInMinutes > currentTimeInMinutes) {
                        foundIndex = i;
                        break;
                    }
                }

                
                if (foundIndex !== -1) {
                    const hourElements = document.querySelectorAll('.hour-item');
                    if (hourElements[foundIndex]) {
                        hourElements[foundIndex].classList.add('next-departure');
                        
                       
                        hourElements[foundIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                } else {
                    
                    alert('Nu mai sunt plecări programate pentru restul zilei de azi pe acest traseu.');
                }
            }
        });
    }
});
