package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ОказаниеКонсультаций
 */
@Entity(name = "IISKursovaya5ОказаниеКонсультаций")
@Table(schema = "public", name = "ОказаниеКонсультаций")
public class OkazanieKonsultacij {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ВремяКонсультации")
    private Integer времяконсультации;

    @Column(name = "ПредоставленнаяУслуга")
    private String предоставленнаяуслуга;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klient")
    @Convert("Klient")
    @Column(name = "Клиент", length = 16, unique = true, nullable = false)
    private UUID _klientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klient", insertable = false, updatable = false)
    private Klient klient;

    @OneToMany(mappedBy = "okazaniekonsultacij", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RaschetOstavshegosyaVremeni> raschetostavshegosyavremenis;


    public OkazanieKonsultacij() {
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

    public Integer getВремяКонсультации() {
      return времяконсультации;
    }

    public void setВремяКонсультации(Integer времяконсультации) {
      this.времяконсультации = времяконсультации;
    }

    public String getПредоставленнаяУслуга() {
      return предоставленнаяуслуга;
    }

    public void setПредоставленнаяУслуга(String предоставленнаяуслуга) {
      this.предоставленнаяуслуга = предоставленнаяуслуга;
    }


}