let template_b = `
            <div class="question">
                <h1>De quelle manière votre travail professionnel s’intéresse aux questions d’intégrité et de lutte
                    contre la corruption ?</h1>
                <div class="response">
                    <div class="form-group">
                        <div>
                            <label for="box1">Commentaires</label>
                        </div>
                        <input type="text" id="box1" name="interet_pro">
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Lesquelles des principales valeurs relatives à l’intégrité sont les mieux partagées au sein des
                    différentes communautés dans votre pays ?</h1>
                <div class="response">
                    <div class="form-group">
                        <input type="checkbox" id="box2" name="valeur" value="1">
                        <label for="box2">La probité </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box3" name="valeur" value="2">
                        <label for="box3">Le respect du bien public, bien commun</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box4" name="valeur" value="3">
                        <label for="box4">La justice sociale </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box5" name="valeur" value="4">
                        <label for="box5">L’engagement citoyen</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box6" name="valeur" value="5">
                        <label for="box6"> Le don de soi </label>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="box7"> Commentaires </label>
                        </div>
                        <input type="text" id="box7" name="valeur_comment">
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Parmi les succès suivants choisissez les (3) grands succès en matière de lutte contre la corruption
                    que votre pays a connu : </h1>
                <div class="response">
                    <div class="form-group">
                        <input type="checkbox" id="box8" name="success" value="0">
                        <label for="box8">Adoption d’une législation anti-corruption</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box10" name="success" value="2">
                        <label for="box10">Mise en place d’institutions efficaces de lutte contre la corruption (CNLCEI,
                            ANIF, Cour des Comptes</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box11" name="success" value="3">
                        <label for="box11">Adhésion de votre pays aux instruments régionaux, internationaux de lutte
                            contre la corruption et de Promotion de la gouvernance (CEMAC, CEA , UA, NU, etc.) </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box12" name="success" value="4">
                        <label for="box12">Publication de rapports d’audit d’institutions publiques et OSC sur le niveau
                            de corruption dans le pays</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box13" name="success" value="5">
                        <label for="box13">Les rapports de l’ANIF, de la CNLCEI, de la Cour des Comptes ayant connu des
                            suites judiciaires  </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box14" name="success" value="6">
                        <label for="box14">Les recouvrements des produits de la corruption/ et du blanchiment de
                            capitaux </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box15" name="success" value="7">
                        <label for="box15">L’implication de la société civile (presse privée, ONG, secteur privé,
                            syndicats) dans la lutte contre la corruption </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box16" name="success" value="8">
                        <label for="box16">Le pays a amélioré ses indicateurs dans les classements mondiaux ( IPC, MO
                            Ibrahim, Afrobarometer, doing business, etc) </label>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="box16">Autres succès (à préciser) </label>
                        </div>
                        <input type="text" id="box16" name="success" value="8">
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Choisissez les trois (3) grands défis en matière de promotion de l’intégrité et de gouvernance dans
                    votre pays ?</h1>
                <div class="response">
                    <div class="form-group">
                        <input type="checkbox" id="box17" name="defi" value="0">
                        <label for="box17">Disponibilité des évaluations statistiques des coûts annuels de la corruption
                            dans le pays</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box18" name="defi" value="1">
                        <label for="box18">Affirmation d’une vision politique et volonté politique dans le pays </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box19" name="defi" value="2">
                        <label for="box19">Engagement des OSC dans les actions de promotion de l’intégrité</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box20" name="defi" value="3">
                        <label for="box20">Cadre légal cohérent et applicable en matière de lutte contre la corruption
                        </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box21" name="defi" value="4">
                        <label for="box21">L’engagement des citoyens sur les questions de redevabilité et
                            transparences</label>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="box22">Commentaires: </label>
                        </div>
                        <input type="text" id="box22" name="defi_comment" value="5">
                    </div>
                </div>
            </div>

            <div class="question">
                <h1>Au Gabon, quelles sont les principales institutions et organisations (Etat et OSC) en charge de la
                    promotion de l’intégrité et de la lutte contre la corruption ?</h1>
                <div class="response">
                    <div class="form-group">
                        <div>
                            <label for="box23">Commentaires :</label>
                        </div>
                        <input type="text" id="box23" name="institution">
                    </div>
                </div>
            </div>
            <div class="question">
                <h1>Au Gabon, les institutions et organisations (Cour des Comptes, ANIF, CNLCEI, Inspection des
                    Finances) de lutte contre la corruption et de promotion de l’intégrité ont-elles eu des succès
                    engrangés ? </h1>
                <div class="response">
                    <div class="form-group">
                        <input type="radio" id="box24" name="ssengrange" value="0">
                        <label for="box24">Oui</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box25" name="ssengrange" value="1">
                        <label for="box25">Non</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box26" name="ssengrange" value="2">
                        <label for="box26">Ne sais pas </label>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="box27">Commentaire</label>
                        </div>
                        <input type="text" id="box27" name="ssengrange" value="2">
                    </div>
                </div>
            </div>
            <div class="question">
                <h1>Parmi les acteurs (politiques, Socio-économiques) suivants, lesquels sont ceux qui nuisent à
                    l’intégrité dans votre pays ?</h1>
                <div class="response">
                    <div class="form-group">
                        <input type="checkbox" id="box28" name="acteur_po" value="0">
                        <label for="box28"> Les leaders des partis politiques</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box29" name="acteur_po" value="1">
                        <label for="box29"> les députés,</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box30" name="acteur_po" value="2">
                        <label for="box30"> les sénateurs </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box31" name="acteur_po" value="3">
                        <label for="box31">les maires </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box32" name="acteur_po" value="4">
                        <label for="box32">les magistrats, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box33" name="acteur_po" value="5">
                        <label for="box33">les forces de l’ordre (police, gendarmerie), </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box34" name="acteur_po" value="6">
                        <label for="box34">les agents des douanes, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box35" name="acteur_po" value="7">
                        <label for="box35">le personnel médical, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box36" name="acteur_po" value="8">
                        <label for="box36">le personnel enseignant, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box37" name="acteur_po" value="9">
                        <label for="box37">le personnel des impôts, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box1" name="acteur_po" value="10">
                        <label for="box38">le personnel des services de passation des marchés, </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box39" name="acteur_po" value="11">
                        <label for="box39">Les directeurs généraux, les directeurs généraux adjoints</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box40" name="acteur_po" value="12">
                        <label for="box40">Les directeurs centraux</label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box41" name="acteur_po" value="13">
                        <label for="box41">Les agents publics des secteurs sensibles (douanes, impôts, justice, etc.)
                        </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box42" name="acteur_po" value="14">
                        <label for="box42">Les citoyens usagers des services publics </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box43" name="acteur_po" value="15">
                        <label for="box43">Les patrons des entreprises privées </label>
                    </div>
                    <div class="form-group">
                        <input type="checkbox" id="box44" name="acteur_po" value="16">
                        <label for="box44">Les journalistes et lanceurs d’alerte</label>
                    </div>
                    <div class="form-group">
                        <div>
                            <label for="box45">Autres à préciser</label>
                        </div>
                        <input type="text" id="box45" name="acteur_po_comment">
                    </div>
                </div>
            </div>
            <div class="question">
                <h1>La justice traite-t-elle efficacement des scandales et infractions de corruption dans votre pays ?
                </h1>
                <div class="response">
                    <div class="form-group">
                        <input type="radio" id="box46" name="justice" value="0">
                        <label for="box46">De temps en temps</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box47" name="justice" value="1">
                        <label for="box47">Régulièrement</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box48" name="justice" value="2">
                        <label for="box48">Rarement</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box49" name="justice" value="3">
                        <label for="box49">Jamais</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box50" name="justice" value="4">
                        <label for="box50">Ne sais pas </label>
                    </div>
                </div>
            </div>
            <div class="question">
                <h1>Combien de cas d’affaires de corruption/ et infractions connexes sont jugés par les tribunaux, par
                    année, dans votre pays ?</h1>
                <div class="response">
                    <div class="form-group">
                        <input type="radio" id="box51" name="cas" value="0">
                        <label for="box51">5- 10 cas</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box52" name="cas" value="1">
                        <label for="box52">0-5 cas</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box53" name="cas" value="2">
                        <label for="box53">Aucun cas</label>
                    </div>
                    <div class="form-group">
                        <input type="radio" id="box54" name="cas" value="3">
                        <label for="box54">Ne sais pas (information non disponible)</label>
                    </div>
                </div>
            </div>
`;