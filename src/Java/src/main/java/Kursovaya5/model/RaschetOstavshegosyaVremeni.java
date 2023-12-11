package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: РасчетОставшегосяВремени
 */
@Entity(name = "IISKursovaya5РасчетОставшегосяВремени")
@Table(schema = "public", name = "РасчетОставшегосяВремени")
public class RaschetOstavshegosyaVremeni {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Использовано")
    private Integer использовано;

    @Column(name = "Доступно")
    private Integer доступно;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirektorOtdelaPoRaboteSKlientami")
    @Convert("DirektorOtdelaPoRaboteSKlientami")
    @Column(name = "ДиректорОтделаПоРаботеСКлиентами", length = 16, unique = true, nullable = false)
    private UUID _direktorotdelaporabotesklientamiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirektorOtdelaPoRaboteSKlientami", insertable = false, updatable = false)
    private DirektorOtdelaPoRaboteSKlientami direktorotdelaporabotesklientami;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Empty")
    @Convert("Empty")
    @Column(name = "РасторжениеДоговора", length = 16, unique = true, nullable = false)
    private UUID _emptyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Empty", insertable = false, updatable = false)
    private RastorzhenieDogovora empty;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OkazanieKonsultacij")
    @Convert("OkazanieKonsultacij")
    @Column(name = "ОказаниеКонсультаций", length = 16, unique = true, nullable = false)
    private UUID _okazaniekonsultacijid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OkazanieKonsultacij", insertable = false, updatable = false)
    private OkazanieKonsultacij okazaniekonsultacij;


    public RaschetOstavshegosyaVremeni() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getИспользовано() {
      return использовано;
    }

    public void setИспользовано(Integer использовано) {
      this.использовано = использовано;
    }

    public Integer getДоступно() {
      return доступно;
    }

    public void setДоступно(Integer доступно) {
      this.доступно = доступно;
    }


}