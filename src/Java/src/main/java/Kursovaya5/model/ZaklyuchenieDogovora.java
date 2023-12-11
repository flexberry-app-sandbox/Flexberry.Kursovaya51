package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ЗаключениеДоговора
 */
@Entity(name = "IISKursovaya5ЗаключениеДоговора")
@Table(schema = "public", name = "ЗаключениеДоговора")
public class ZaklyuchenieDogovora {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Тип")
    private String тип;

    @Column(name = "Стоимость")
    private Integer стоимость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OkazanieKonsultacij")
    @Convert("OkazanieKonsultacij")
    @Column(name = "ОказаниеКонсультаций", length = 16, unique = true, nullable = false)
    private UUID _okazaniekonsultacijid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OkazanieKonsultacij", insertable = false, updatable = false)
    private OkazanieKonsultacij okazaniekonsultacij;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "DirektorOtdelaPoRaboteSKlientami")
    @Convert("DirektorOtdelaPoRaboteSKlientami")
    @Column(name = "ДиректорОтделаПоРаботеСКлиентами", length = 16, unique = true, nullable = false)
    private UUID _direktorotdelaporabotesklientamiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "DirektorOtdelaPoRaboteSKlientami", insertable = false, updatable = false)
    private DirektorOtdelaPoRaboteSKlientami direktorotdelaporabotesklientami;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;


    public ZaklyuchenieDogovora() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getТип() {
      return тип;
    }

    public void setТип(String тип) {
      this.тип = тип;
    }

    public Integer getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Integer стоимость) {
      this.стоимость = стоимость;
    }


}