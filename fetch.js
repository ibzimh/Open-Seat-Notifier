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