# AAU AutoPark
### Opretter automatisk en 10 timers gæsteparkering på P17, P2A, P3 &amp; område 4688 🚗
*Tager >9 sekunder! ⌛️*

<img width="400" height="866" align="center" alt="ScreenRecording_09-24-2026 15-09-33_1" src="https://github.com/user-attachments/assets/7275e86f-53f3-46b6-9d3e-91050f4f3d1c" />

<br>
<br>
Tjenesten benytter userscripts og fungerer derfor på alle platforme! 💻📱

Jeg har lavet en guide til at opsætte det på iOS således, at en parkering automatisk starter, når man ankommer til parkeringspladsen, men da det bare er et userscript, kan det derfor bruges på hvilken som helst platform med fx Tampermonkey 🐒

Virker på iOS selvom du bruger en anden standardbrowser end Safari 🧭


## Installationsguide (iOS)

### Download 📦
1. Installer appen [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887) og gennemfør dens installationsguide (husk "aktiver JavaScript, aktiver udvidelsen osv.) 📲
2. Download [AAU-AutoPark](https://github.com/kallekalle/AAU-AutoPark/blob/main/autopark-v1.0.user.js) userscriptet ⬇️
3. Placér scriptet i Userscripts-mappen
```
"Arkiver"-appen -> På min iPhone -> UserScripts
```
4. Åbn Safari og aktiver scriptet
5. Du starter nu en parkering, hver gang du besøger hjemmesiden! ✅
   - Første gangs scriptet kører, bliver du bedt om din nummerplade og e-mailadresse - dette udfyldes kun én gang og gemmes herefter 💾
   - <img width="250" alt="ScreenRecording_09-24-2026 14-47-20_1" src="https://github.com/user-attachments/assets/ae3c87b5-e9ef-4d4e-a625-4a2c71da386e" />


### Kør automatisk
- Du kan med fordel installere [denne genvej](https://www.icloud.com/shortcuts/b242a1722941436d836e595b30c3ebb0) til Genveje-appen
- Herefter kan du oprette en automatisering, som giver mening for dig.. kunne fx være "når jeg ankommer til SLV300, så kør ovenstående genvej"
- <img width="300" alt="Skærmbillede 2026-09-24 kl  14 41 59" src="https://github.com/user-attachments/assets/96c2c92e-59dc-4469-b4e6-eb1e73daad3c" />

## Virker det ikke? 💔
1. Tjek, at Userscripts-udvidelsen er slået til i Safari's indstillinger
   
   <img width="300" alt="IMG_6504" src="https://github.com/user-attachments/assets/f2a843ae-468a-42c1-9053-1a48c44cbfe4" />
   
3. Tjek at JavaScript i Safari er slået **til**
```
Indstillinger -> Safari -> Avanceret -> JavaScript
```
<img width="300" alt="Skærmbillede 2026-09-24 kl  14 53 43" src="https://github.com/user-attachments/assets/c0a47e77-33ec-420b-9fc3-0885250f53bb" />



3. Tjek at AAU AutoPark-scriptet er aktiveret under
```
Safari -> Puslespilsbrik øverst i venstre hjørne -> Userscripts -> "AAU Autopark" skal være hvid
```

<img width="300" alt="IMG_6506" src="https://github.com/user-attachments/assets/f92ab8a4-43d1-4bf4-8184-a8632fee365f" />
