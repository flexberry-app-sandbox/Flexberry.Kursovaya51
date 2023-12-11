package Kursovaya5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISKursovaya5Клиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "id")
    private Integer id;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "Отчество")
    private String отчество;

    @Column(name = "НомерТелефона")
    private String номертелефона;

    @Column(name = "НаимОрганицации")
    private String наиморганицации;

    @OneToMany(mappedBy = "klient", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazanieKonsultacij> okazaniekonsultacijs;

    @OneToMany(mappedBy = "klient", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<RastorzhenieDogovora> rastorzheniedogovoras;

    @OneToMany(mappedBy = "klient", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZaklyuchenieDogovora> zaklyucheniedogovoras;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getid() {
      return id;
    }

    public void setid(Integer id) {
      this.id = id;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public String getОтчество() {
      return отчество;
    }

    public void setОтчество(String отчество) {
      this.отчество = отчество;
    }

    public String getНомерТелефона() {
      return номертелефона;
    }

    public void setНомерТелефона(String номертелефона) {
      this.номертелефона = номертелефона;
    }

    public String getНаимОрганицации() {
      return наиморганицации;
    }

    public void setНаимОрганицации(String наиморганицации) {
      this.наиморганицации = наиморганицации;
    }


}