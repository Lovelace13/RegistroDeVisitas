select
    'data source=' + @@servername +
    ';initial catalog=' + db_name() +
    case type_desc
        when 'WINDOWS_LOGIN' 
            then ';trusted_connection=true'
        else
            ';user id=' + suser_name() + ';password=<<YourPassword>>'
    end
    as ConnectionString
from sys.server_principals
where name = suser_name()

data source=DESKTOP-D4QC4L0\KATIU;initial catalog=PanaceaProduccionExt3008;user id=sa;password=<<YourPassword>>