 = Get-ChildItem -Path  = [char]0x5E83 + [char]0x5CF6 + [char]0x5DE5 + [char]0x696D + [char]0x5927 + [char]0x5B66 + ' ' + [char]0x8D77 + [char]0x696D + [char]0x90E8
 in  = [System.IO.File]::ReadAllText( = New-Object System.Text.UTF8Encoding  = '<span class="font-bold text-lg tracking-tight">[^<]+</span>'
     + '</span>'
    , )
    
    [System.IO.File]::WriteAllText(, .Name)
}
Write-Host 'Done'
