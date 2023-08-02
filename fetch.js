import { readFromJSONFile, writeToJSONFile } from './fileUtility.js';

fetch("https://umass.collegescheduler.com/api/terms/Fall%202023/subjects/COMPSCI/courses", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache",
    "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Microsoft Edge\";v=\"115\", \"Chromium\";v=\"115\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "cookie": "_ga=GA1.1.32966608.1686714406; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24device_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; .AspNet.Cookies=mNNGRVVcc_TIca8AVbE-lKvt1YM8C_GSY1A0fkis6UGX0jvlLOLxz6fd8Yu31wrw5tLBk6BdefsGNCdqn4uv8xnraI2Mrn5Qpp3tusyHuG98aOE5va-bMAKKVxWpVVJH1MpcABgHIDnb0m0wYpd_i1B3CKNn4dGthGT-8FV0_pmqLKTy5sTnnZNNs4rNZUApUrZ5ScTQnOLnWdkJxYjGziFbZV7xgaDxfn8STxgVs2Fdrn-xoOulOXDmN_foBkw_flDVLTB9T2bcrRsNp-FtDZIPuU4gc6wx82SIsh-g4OThq_xmtrXV_cusjqyVtPhhr5DyjzqRQZRyF8NBKs9vghM0KIdEyp41fGTwIcXv85kK9JH_yYdaciNDIa0-XkUCqNvU3LutszYZKLFbUJ_tez_u-LFBG0-oZDHACUU-jOdjrZ_f4AwdM0iKrV1XnmrS8ODgjEx7CQIjfTXFJNe6oje0wTJu2qSGiavKCJEzPSEfIV7pOvQdeuR-YEBsSTTWA6_FIbC3BtAdXvRrg8td6RZlz6V65vvENpM9811xUsp3NPp3UdFejlHDvyevOQvnygClupVNv2wkwaneL0muMCSODVsJLDAxATEfBgSH5bg1VDQlFiM55q75FO01P5vvRNZjiVJAefvcuZopoT7Tyt0cVld-L6-tXAbejcK1RX1i_mpSYiCWuLAfjJVS7DM6IC6vcf4sHRSudMFLszFAedhmqDq1hV_1_hj13Kju_rl_WvzKSbOUvaHdxuaLi4C1N1B4Ie4653T04ivRcINov9vcYGNSrBPlet1h3vqt1JgxcKI-fWw3YDbYWrUkqDEwZLE8X-AQKfqSiZyzc-qgrOkbKApP3z01wYHyFV5SIsKSpTN3duJba8PHTbsXJobRAqICFrAQb7tfP_4yVMdhusDbc_VkzkVGOKJfkg-rZwhDHFUkyXoDxUZaIhDWmpdzk9Sk4x7i6xGsEGFIjdXAmTQjhxFpQ7jDDAhOgJIXUDsp2NIf2_M8Sk_zNHSaFotK94afLZHmacNP5_gXfvPtudglWmYPaDIAH6DjMFjaVbd960RroOh1_iIxEMPl4ee4g9avZb_CFpHxMfaQ945xEdgDemdwQFikgewUzqhHA84bRnlZJSNVaQaaNowU5VeGuipdPlAlLEsTZmDAtRoCG5KR5vyC5G3vpNkd_7yaDcOWXqG3eXto3xJMLhp-UunyQsuLebFHcUD0YMBSuqVfJbI_97umSaXpUwQUht9orf1ne3HSsa6H6CH0vo12iyBGyDSOhuMZPUT3hlQPAuLSWMC5woPHXavbxyGF2ORe3oCpEoamTrLKytrNrAzCdvEQFcDc2Tp5lEqxQ0mc7T4ubS3Qd7lfPaPM2y6xud-LJK76wjKMPuwhAe3X1jPAy4N8h-HiiNzOY1-BIPDXcZ4q8nOljEeknD3YfrtCSgPV8GkKA-YgM7jCGtOlAu3Ztxa2Ss0d28ksbU1YRCGbfLqWHiDCPH4lL7u7tjxCDRuAD-af8iYHz8HnoatCDggsnhp5XUwFO_XK4BZfEx9L-OTCXxDd79bdBW2m6Jtdl8QzIUrynMhuVdTuS7RXpklQcW1CTCfiWn6InmdKgStc3Vt7RNru5YQlARZP2m154JI2EJs_28iujfaNvwG-MGVdrV5c_1_2LSsE8mL_G1oLT_5EliErLTOLBS0fRBJzjNboLhm-lnJxkKh8dBqc45bXB48nfMj3tUThBEo2rvel5Govv3zo5ansLGqYBBZoWA1RBenlmR_AntcZLLjzSaC6ngx-WS7LtsXxPo1qMZpJNq7oJ_xMY-UNTHQl9UzjV5_x2x1WlwGDkMFVPLqVFw8imUEGuDsxojK-KyUKrUnV4FjaZTM_R5ve3jscGMLlAe5KLYmhVGbP; __RequestVerificationToken=YPywEZ_NfYTAPdp96gHF0X0zGprVNCYbUlsy1RXR6dAeWR6vWGamdZUj1v2NpLXSwwK-6gEmGAuwcJzGRfj4_ablMFU1; _ga_GZ44FZWHSB=GS1.1.1690280733.26.1.1690281528.60.0.0",
    "Referer": "https://umass.collegescheduler.com/terms/Fall%202023/courses/add",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
}).then(response => response.json())
.then(data => writeToJSONFile('data.json', data))
.then(msg => console.log(msg), err => console.log(`ERROR: ${err}`));

// fetch("https://umass.collegescheduler.com/api/terms/Fall%202023/subjects/COMPSCI/courses", {
//   "headers": {
//     "accept": "*/*",
//     "accept-language": "en-US,en;q=0.9",
//     "cache-control": "no-cache",
//     "pragma": "no-cache",
//     "sec-ch-ua": "\"Not/A)Brand\";v=\"99\", \"Microsoft Edge\";v=\"115\", \"Chromium\";v=\"115\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "cookie": "_ga=GA1.1.32966608.1686714406; ph_foZTeM1AW8dh5WkaofxTYiInBhS4XzTzRqLs50kVziw_posthog=%7B%22distinct_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24device_id%22%3A%2218953858d8621ce-0cc9769a852e13-7e565470-144000-18953858d872989%22%2C%22%24user_state%22%3A%22anonymous%22%2C%22extension_version%22%3A%221.5.5%22%2C%22%24session_recording_enabled_server_side%22%3Afalse%2C%22%24autocapture_disabled_server_side%22%3Afalse%2C%22%24active_feature_flags%22%3A%5B%5D%2C%22%24enabled_feature_flags%22%3A%7B%22enable-session-recording%22%3Afalse%2C%22sourcing%22%3Afalse%2C%22only-company-edit%22%3Afalse%2C%22job-lists%22%3Afalse%7D%2C%22%24feature_flag_payloads%22%3A%7B%7D%7D; __RequestVerificationToken=YPywEZ_NfYTAPdp96gHF0X0zGprVNCYbUlsy1RXR6dAeWR6vWGamdZUj1v2NpLXSwwK-6gEmGAuwcJzGRfj4_ablMFU1; .AspNet.Cookies=lr38mppfxMbgfsD2pXJw0P3N4kU2mted_Fr9eZk_YnaMJpPnMg_6PS89DyIsvsbiuQF6NgNkyecEeq6St9DBMinVIQceihWRJtRi7jE09mU-cY0KqV78AZsy4F4vSjn4gBlJRQjSjdzqljn7IgwYrJJoYwjMsanVkZIm9b7mCSxsZ4GlNjEN0cbAQ0VY6kFPgfeI6NoEuqbchx6dzlMbUsSGoogEVejoLfDTrJPNkB9Zo6Sfv6DUeKbAsiChJdv1XtWVVxY849fm69QFUdlwHpdap5ZJpuZfIo6UjGfN6zBWwd54zjQcO-Gc5tQtpBB4CRDc50Bc5kfTtKNR_ax8TAkTup-WFj6yEP2jIuxb-h4XyCdxr3odYpoUP3P40XIeRcQ_Fj9-hGB8ke1o6QBfu67d26ybmlaM5jTg6Yhe_SwE7kGo7nvhrPfbDhri8nufph-Yi7mzLVFDnijyN-i0dyH5sY1p4C_S0xxIQBEuZ5aWpEO3CalLSQRHIOC3OS1YpW_2FY0AWT1D4KcN2yCfu494ca2Ul5rNlKZjXiNJCpmgyDxeV2H9l-90rEh9L28AHMl6N3w7UiJoBJlC6WiBOcI5AQcS6z5yRcb6UzUQPD6kn7dn06h2fE9SLSB2wrfhplvavbxqvQdklkRW-aahxVPPQWjvWd-CPTCE68aBj-PtXS-0QdJRtyXDNwpX51yytAEKi3XiwZUXuS7inCMfc5379gVfhePrU3-ftva6PkHgaAohFvCkc0IyvrqBbqr_kcIxQg08PscYVkxial8L6m-2Mvh-r1YvOlhQNFDAZ67XUS4ebKIyGWsodyn3FOd9EX3oyEUYY9e1BSWptbz-cEU07Hzb7FOQFFKO97W91xVEOtq5cYL8s-NyzMeRmomH-0J7Db2EufFa6RfE4it3T_GVNouR4V6hz5W_grYf3iH0loKMLp6WeTFxBDeEjOHKdTyo0s_ddG3wNfCA5aEvl_3RAOOL-VHfhkFpn6k8sdn-jCxjm0E2gwj6TKhMtXXQwujfNW-ufHkSqkXzn7fBE1rV8B93q5R-iXBoyU03Oqtup5Nm0Q-dexvpRzrvXVMJKz8DnMr9ka9XTRYdtVud8oQEeGXH5EXrgjrq1-aAEJldRd8gqVELQ8dLhHhRh54lr8VXomX_ua29wPANM36w6c-3wqyZIw9jr-3x92faG3QsxrdpFOHgwDej9fYdjOD6Q91RN4fKAwzjfwWqOwpgMdHsTci9kLogMB3OoVUUdK8VRlyXLx6I1JIHMokPp-LB78RwUbsMStOiT2doTh2Jl_WOel5zIaDcvFbetkql9DIrMRYhcFjWWwDcS8C6YdwnHGRAZBFj3YseBhz2oLVhlxY73du3JbrcfVXz09hAqk_a1ypL7ZBqSHgncW3Toc7h1qhTEgjO2-pm_q-F5nrYnaRgDamMNImuKFCxYAoIKc_1-WOuA_4IMds9VNUoCmESl9e5m_58CK1ynsM04qi_VpWHzdSIAg5c7PdKQKqEywV41tfneuRcn1iZ41S5UCaCPQgjjsY7VSLNXy_cMRVl4LSp-MBe4Or8PlkzXZhRdfHfEaXl5XzomtcmL8tcVBtbJsRXbNtr0J807w2NsxUaGKf-qWbP-3ehpm2ufrCsCbqdotDxUagESua0nSunbtAOiOhM9NYv_5R5tgAqRLKF91qWFP2YY4obmE0uXslK6ba4Vz2RB3EZERwhPucskBX2Sxuuw3VLPa4ZKpne4yGkWa_7s7302zD7S1HdSHUG1wABY-2jYYAdNGnVQHHyBE0iOAumP4exhB8Hiv_RpK3wO-LpD674hQHeAcIMqaUtfIhRWQaJhIQ47D0HcWjEWN37vDb9NVvyOur4RFIh7JWu7N0gAKQ; _ga_GZ44FZWHSB=GS1.1.1690280733.26.1.1690283004.45.0.0",
//     "Referer": "https://umass.collegescheduler.com/terms/Fall%202023/courses/add",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": null,
//   "method": "GET"
// }).then(response => response.json())
// .then(data => writeToJSONFile('data.json', data))
// .then(msg => console.log(msg), err => console.log(`ERROR: ${err}`));